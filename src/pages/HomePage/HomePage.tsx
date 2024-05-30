import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { useAppSelector } from '../../store/hooks';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  const products = useAppSelector(state => state.products);

  return (
    <section className="homepage">
      <Container className="homepage__container">
        <ul className="homepage__cards">
          {products.items.map(item => (
            <li key={item.id}>
              <Card product={item} classname="homepage__card" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
