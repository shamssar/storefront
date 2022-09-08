import axios from 'axios';

let initialState = {
  products: [
  
  ],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'UPDATE_INVENTORY':
      let products = state.products.map(product => {
        if (product.name === payload) {
          if (product.inventoryCount !== 0) {
            return { ...product, inventoryCount: product.inventoryCount - 1 };
          } else {
            return product;
          }
        } else {
          return product;
        }
      });

      return { products };

    case 'FETCH_PRODUCTS':
      return { products: payload };

    case 'RESET_INVENTORY':
      return initialState;

    default:
      return state;
  }
}

export const fetchProducts = () => async dispatch => {
  const response = await axios.get(
    'https://api-integration-server.herokuapp.com/products'
  );
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data.results,
  });
};

export default productReducer;