import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <div>
        <h1 className="not-found__title">Something went wrong</h1>

        <p className="not-found__try-again">Let&apos;s try again</p>

        <div className="not-found__links">
          <Link className="not-found__link" to="/">
            Go to homepage
          </Link>
          <Link className="not-found__link" to="/cart">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};
