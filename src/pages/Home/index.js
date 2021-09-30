import { Route, Switch } from 'react-router';
import Cart from '../../components/Cart';
import Products from '../../components/Products';

const Home = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Home;
