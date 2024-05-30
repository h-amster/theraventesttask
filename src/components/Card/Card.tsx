/* eslint-disable max-len */
import './Card.scss';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as cartActions from '../../store/cartSlice';
import { Product } from '../../types/Product';
import { CartItem } from '../../types/CartItem';
import { getNormalizedPrice } from '../../utils/getNormalizedPrice';

type Props = {
  product: Product;
  classname?: string;
};

export const Card: React.FC<Props> = ({ product, classname = '' }) => {
  const { id, name, price, img } = product;

  const cart = useAppSelector(state => state.cart.cart);
  const currency = useAppSelector(state => state.products.currency);
  const exchangeRate = useAppSelector(state => state.products.exchangeRate);
  const dispatch = useAppDispatch();

  const cartIds = cart.map((item: CartItem) => item.id);

  const handleFavBtnClick = (itemId: number) => {
    if (cartIds.includes(itemId)) {
      dispatch(cartActions.removeFromCart(itemId));
    } else {
      dispatch(cartActions.addToCart(itemId));
    }
  };

  const normalizedName = name.length > 13 ? name.slice(0, 12) + '…' : name;
  const normalizedPrice = getNormalizedPrice(price, exchangeRate, currency);
  const isInCart = cartIds.includes(id);

  return (
    <article
      className={classNames('card', {
        [classname]: classname,
        'card--in-cart': isInCart,
      })}
    >
      <img className="card__img" src={img} alt="Product" />

      <h3 className="card__title" title={name}>
        {normalizedName}
      </h3>

      <div className="card__price">
        {normalizedPrice} {currency}
      </div>

      <button className="card__button" onClick={() => handleFavBtnClick(id)}>
        <span className="card__button-text">
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </span>
      </button>
    </article>
  );
};
