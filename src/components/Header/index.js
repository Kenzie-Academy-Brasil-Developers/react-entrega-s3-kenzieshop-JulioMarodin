import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <div className="div__header--container">
      <div className="div__header--box">
        <h1>Kenzie Shop</h1>
        <h3>
          <Link to="/cart">Carrinho</Link>
        </h3>
      </div>
      <hr />
    </div>
  );
};

export default Header;
