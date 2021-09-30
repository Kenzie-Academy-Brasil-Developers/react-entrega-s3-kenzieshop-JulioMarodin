import { addToCart, removeFromCart } from './actions';

export const addToCartThunk = (product) => {
  return (dispatch) => {
    const list = JSON.parse(localStorage.getItem('cart')) || [];
    const productAlreadyAdded = list.find((item) => item.id === product.id);
    if (productAlreadyAdded === undefined) {
      list.push(product);
      localStorage.setItem('cart', JSON.stringify(list));

      dispatch(addToCart(product));
    }
  };
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();

  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem('cart', JSON.stringify(list));
  dispatch(removeFromCart(list));
};
