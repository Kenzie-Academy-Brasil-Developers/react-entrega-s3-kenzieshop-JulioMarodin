import { useDispatch } from 'react-redux';
import {
  addToCartThunk,
  removeFromCartThunk,
} from '../../store/modules/cart/thunks';
import './styles.css';

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image } = product;
  return (
    <div className="div__product">
      <img alt={name} src={image} />
      <h3>{name}</h3>
      <p>{`R$${price},00`}</p>
      {isRemovable ? (
        <button
          className="button__remove"
          onClick={() => dispatch(removeFromCartThunk(id))}
        >
          Remove item from cart
        </button>
      ) : (
        <button
          className="button__add"
          onClick={() => dispatch(addToCartThunk(product))}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product;
