const initialState = {
    allProducts: [
      {category: 'food', name: 'pizza', description: 'Italian food', price: '12 JD', inventory: 100},
      {category: 'food', name: 'Burger', description: 'American food', price: '10 JD', inventory: 100},
      
      {category: 'electronics', name: 'Camera', description: 'For images and/or video', price: '100 JD', inventory: 20},

    {category: 'electronics', name: 'Laptop', description: 'Mac Laptop', price: '100 JD', inventory: 25},
    ],
    displayedProducts: []
  }
   export default function ProductsReducer (state = initialState, action) {
  
    const {type, payload} = action;
  
    switch(type) {
  
      case 'Change':
        let displayedProducts = filterProducts(state.allProducts, payload);
        return {...state, displayedProducts};
  
      default:
        return state;
  
    }
  } 
  
  const filterProducts = (products, choice) => {
    return products.filter(product => product.category === choice);
  }