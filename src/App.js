import React from 'react';
import './App.css';
import Header from './components/header'; 
import Footer from './components/footer'; 
import Categories from './components/categories';
import Products from './components/products';


function App (props) {

  return (
    <>
      <Header/>
      <Categories />
      <Products />
      <Footer/>
    </>
  );
};
export default(App);