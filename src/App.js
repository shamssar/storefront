import './App.css';

import { Provider } from 'react-redux';
import store from './store/index.js';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import SimpleCart from './components/simplecart';

function App() {
  return (
    <>
      <Provider store={store()}>
        <Header />
        <Categories />
        <Products />
        <SimpleCart />
        <Footer />
      </Provider>
    </>
  );
}

export default App;