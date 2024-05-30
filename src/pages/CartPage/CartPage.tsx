/* eslint-disable jsx-a11y/label-has-associated-control */
import './CartPage.scss';

import { CartItem } from '../../components/CartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Product } from '../../types/Product';
import { Container } from '../../components/Container/Container';
import { getNormalizedPrice } from '../../utils/getNormalizedPrice';
import { useState } from 'react';
import { clearCart } from '../../store/cartSlice';
import { ref, set } from 'firebase/database';
import { database } from '../../utils/firebase';
import { Modal } from '../../components/Modal/Modal';
import { OrderData } from '../../types/OrderData';
import { Link } from 'react-router-dom';

export const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const cart = useAppSelector(state => state.cart.cart);
  const products = useAppSelector(state => state.products.items);
  const currency = useAppSelector(state => state.products.currency);
  const exchangeRate = useAppSelector(state => state.products.exchangeRate);

  const cartItems = cart
    .map(item => {
      return {
        ...(products.find(product => product.id === item.id) as Product),
        count: item.count,
      };
    })
    .filter(item => item !== undefined);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0,
  );

  const normalizedTotal = getNormalizedPrice(total, exchangeRate, currency);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [hasNameError, setHasNameError] = useState(false);
  const [hasSurnameError, setHasSurnameError] = useState(false);
  const [hasAddressError, setHasAddressError] = useState(false);
  const [hasPhoneError, setHasPhoneError] = useState(false);
  const phoneRegExp = /^(?:\+380|380|0)\d{9}$/;

  function validateFields() {
    if (name.length === 0) {
      setHasNameError(true);
    } else {
      setHasNameError(false);
    }

    if (surname.length === 0) {
      setHasSurnameError(true);
    } else {
      setHasSurnameError(false);
    }

    if (address.length === 0) {
      setHasAddressError(true);
    } else {
      setHasAddressError(false);
    }

    if (!phoneRegExp.test(phone)) {
      setHasPhoneError(true);
    } else {
      setHasPhoneError(false);
    }
  }

  function clearForm() {
    setName('');
    setSurname('');
    setAddress('');
    setPhone('');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    validateFields();

    if (
      name.length === 0 ||
      surname.length === 0 ||
      address.length === 0 ||
      !phoneRegExp.test(phone)
    ) {
      return;
    }

    const data = {
      name,
      surname,
      address,
      phone,
      total: Math.round(total * 100) / 100,
      items: cartItems,
    };

    const dataRef = ref(database, 'orders/' + Date.now());

    set(dataRef, data)
      .then(() => {
        setOrderData(data);
      });

    clearForm();
    dispatch(clearCart());
  }

  return (
    <section className="cartpage">
      <Container className="cartpage__container">
        {!!total ? (
          <>
            <div className="cartpage__content">
              <ul className="cartpage__items">
                {cartItems.map(item => (
                  <li key={item.id}>
                    <CartItem product={item} />
                  </li>
                ))}
              </ul>

              <p className="cartpage__total">Total: {normalizedTotal}</p>
            </div>

            <div className="cartpage__form-wrapper">
              <form className="cartpage__form" onSubmit={handleSubmit}>
                <h2 className="cartpage__form-title">Make order</h2>

                <label className="cartpage__form-label" htmlFor="name">
                  <div className="cartpage__input-text">
                    <p className="cartpage__input-title">Name:</p>

                    {hasNameError && (
                      <p className="cartpage__input-error">
                        Name shouldn&apos;t be emty
                      </p>
                    )}
                  </div>
                  <input
                    id="name"
                    name="name"
                    className="cartpage__input"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </label>

                <label className="cartpage__form-label">
                  <div className="cartpage__input-text">
                    <p className="cartpage__input-title">Surname:</p>

                    {hasSurnameError && (
                      <p className="cartpage__input-error">
                        Surname shouldn&apos;t be emty
                      </p>
                    )}
                  </div>
                  <input
                    className="cartpage__input"
                    type="text"
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                  />
                </label>

                <label className="cartpage__form-label">
                  <div className="cartpage__input-text">
                    <p className="cartpage__input-title">Address:</p>

                    {hasAddressError && (
                      <p className="cartpage__input-error">
                        Address shouldn&apos;t be emty
                      </p>
                    )}
                  </div>
                  <input
                    className="cartpage__input"
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                  />
                </label>

                <label className="cartpage__form-label">
                  <div className="cartpage__input-text">
                    <p className="cartpage__input-title">Phone:</p>

                    {hasPhoneError && (
                      <p className="cartpage__input-error">
                        Enter valid Ukrainian phone number
                      </p>
                    )}
                  </div>
                  <input
                    className="cartpage__input"
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </label>
                <button className="cartpage__submit" type="submit">
                  Order
                </button>
              </form>
            </div>
          </>
        ) : (
          'Cart is empty'
        )}
      </Container>

      {orderData && (
        <Modal>
          <Link className="cartpage__modal-btn" to="/">
            Go to Homepage
          </Link>
          <strong className="cartpage__modal-important">
            Your order has been successfully recorded in the Firebase Realtime
            Database with the provided data:
          </strong>
          <pre>{JSON.stringify(orderData, null, 2)}</pre>
        </Modal>
      )}
    </section>
  );
};
