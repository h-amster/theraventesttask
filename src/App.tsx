import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import * as productsActions from './store/productsSlice';
import { useEffect } from 'react';
import { PageLoader } from './components/PageLoader/PageLoader';

export const App = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, []);

  if (products.isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
