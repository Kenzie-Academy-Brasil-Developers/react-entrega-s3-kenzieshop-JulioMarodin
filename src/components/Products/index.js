import { useSelector } from 'react-redux';
import Product from '../Product';
import './styles.css';

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <dic className="div__container">
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </dic>
  );
};

export default Products;
