import './Header.scss';
import { Container } from '../Container/Container';
import { Nav } from '../Nav/Nav';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Product } from '../../types/Product';
import { CurrencyValues } from '../../types/CurrencyValues';
import { setCurrency } from '../../store/productsSlice';
import { getNormalizedPrice } from '../../utils/getNormalizedPrice';

export const Header: React.FC = () => {
  const cart = useAppSelector(state => state.cart.cart);
  const products = useAppSelector(state => state.products.items);
  const currency = useAppSelector(state => state.products.currency);
  const exchangeRate = useAppSelector(state => state.products.exchangeRate);
  const dispatch = useAppDispatch();

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

  return (
    <header className="header">
      <Container className="header__container">
        <div className="header__content">
          <Nav />

          {!!total && (
            <p className="header__total-price">
              Total price: {normalizedTotal} {currency}
            </p>
          )}
        </div>

        <div className="header__currency-block">
          <button
            className="header__currency-btn"
            onClick={() => dispatch(setCurrency(CurrencyValues.USD))}
            disabled={currency === CurrencyValues.USD}
          >
            {CurrencyValues.USD}
          </button>
          <span>|</span>
          <button
            className="header__currency-btn"
            onClick={() => dispatch(setCurrency(CurrencyValues.UAH))}
            disabled={currency === CurrencyValues.UAH}
          >
            {CurrencyValues.UAH}
          </button>
        </div>
      </Container>
    </header>
  );
};
