import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import SimpleCart from './components/simplecart';
import ShoppingCart from './components/shoppingCart';

function App() {
  return (
    <>
      <Provider store={store()}>
        <Router>
          <Header />
          <Routes>
            <Route path="/cart" element={<ShoppingCart />} />
            <Route
              path="/"
              element={
                <>
                  <Categories />
                  <Products />
                  <SimpleCart />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;