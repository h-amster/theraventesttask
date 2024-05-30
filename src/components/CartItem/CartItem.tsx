/* eslint-disable max-len */
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as cartActions from '../../store/cartSlice';
import './CartItem.scss';
import { CartProduct } from '../../types/CartProduct';
import { getNormalizedPrice } from '../../utils/getNormalizedPrice';

type Props = {
  product: CartProduct;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const cart = useAppSelector(state => state.cart.cart);
  const currency = useAppSelector(state => state.products.currency);
  const exchangeRate = useAppSelector(state => state.products.exchangeRate);
  const dispatch = useAppDispatch();
  const { name, img, price, id } = product;

  const count = cart.find(item => item.id === id)?.count;
  const normalizedPrice = getNormalizedPrice(price, exchangeRate, currency);

  return (
    <article className="cart-item">
      <div className="cart-item__info">
        <img className="cart-item__img" src={img} alt="Cart item" />
        <h2 className="cart-item__name">{name}</h2>
        <p className="cart-item__price">
          {normalizedPrice} {currency}
        </p>
      </div>

      <div className="cart-item__buttons">
        <button
          className="cart-item__btn"
          onClick={() => dispatch(cartActions.removeOneFromCount(id))}
        >
          -
        </button>

        <p className="cart-item__count">{count}</p>

        <button
          className="cart-item__btn"
          onClick={() => dispatch(cartActions.addOneToCount(id))}
        >
          +
        </button>
        <button
          className="cart-item__remove"
          onClick={() => dispatch(cartActions.removeFromCart(id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 92 92"
            fill="currentColor"
          >
            <path d="m78.4 30.4-3.1 57.8c-.1 2.1-1.9 3.8-4 3.8H20.7c-2.1 0-3.9-1.7-4-3.8l-3.1-57.8c-.1-2.2 1.6-4.1 3.8-4.2 2.2-.1 4.1 1.6 4.2 3.8l2.9 54h43.1l2.9-54c.1-2.2 2-3.9 4.2-3.8 2.1.1 3.8 2 3.7 4.2zM89 17c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4s1.8-4 4-4h22V4c0-1.9 1.3-3 3.2-3h27.6C61.7 1 63 2.1 63 4v9h22c2.2 0 4 1.8 4 4zm-53-4h20V8H36v5zm1.7 65c2 0 3.5-1.9 3.5-3.8l-1-43.2c0-1.9-1.6-3.5-3.6-3.5-1.9 0-3.5 1.6-3.4 3.6l1 43.3c0 1.9 1.6 3.6 3.5 3.6zm16.5 0c1.9 0 3.5-1.6 3.5-3.5l1-43.2c0-1.9-1.5-3.6-3.4-3.6-2 0-3.5 1.5-3.6 3.4l-1 43.2c-.1 2 1.5 3.7 3.5 3.7-.1 0-.1 0 0 0z"></path>
          </svg>
        </button>
      </div>
    </article>
  );
};
