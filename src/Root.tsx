import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ScrollToTop } from './utils/ScrollToTop';
import { CartPage } from './pages/CartPage/CartPage';

export const Root: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
