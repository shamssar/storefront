const initialState = {
    allCategories: {
        food: {name:'Food', displayName: 'food', description: 'all food related products', image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
        electronics: {name:'Electronics', displayName: 'electronics', description: 'all electronics', image:'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80'},
    
    },
      activeCategory: {name:'choose-category', displayName: 'Catagories', description: 'choose a category to see what we have available'},
  }
  
  

  export default function CategoriesReducer (state = initialState, action){
    const {type, payload} = action;
    switch(type) {
      case "SELECT_CATEGORY":
        console.log(payload, state.allCategories[payload]);
        return {...state, activeCategory: state.allCategories[payload]};
  
      default:
        return state;
    }

  }
