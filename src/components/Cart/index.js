import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Product from '../Product';
import './styles.css';

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  const total = cart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  return (
    <div className="div__cart">
      <div className="cart__orders">
        <div className="cart__orders--box">
          <p>Total: {`R$${total},00`}</p>
          <h4>
            <Link to="/">Go back</Link>
          </h4>
        </div>
      </div>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable />
      ))}
    </div>
  );
};

export default Cart;
