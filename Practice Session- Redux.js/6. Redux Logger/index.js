// Working Procedure.
// 1. State.
// 2. Action-Object-> type,plyload/data.
// 3. Reducer.
// 4. Store -> getState(),dispatch(),subscribe().

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
// Product Constant
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";

// Card Constant
// const ADD_CART = "ADD_CART";
// const GET_CARTS = "GET_CARTS";

// Initial State of Product
const initialProductState = {
  products: ["Table", "Mouse"],
  numberOfProducts: 2,
};

// Initial State of Cart
// const initialCartState = {
//   carts: ["Suger", "Salt"],
//   numberOfCarts: 2,
// };

// Action Of Get Product
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

// Action of get Cart
// const getCart = () => {
//   return {
//     type: GET_CARTS,
//   };
// };

// Action of add Product
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// Action of add Cart

// const addCart = (cart) => {
//   return {
//     type: ADD_CART,
//     payload: cart,
//   };
// };

// Product reducer.
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

// Cart Reducer

// const cartReducer = (state = initialCartState, action) => {
//   switch (action.type) {
//     case GET_CARTS:
//       return {
//         ...state,
//       };

//     case ADD_CART:
//       return {
//         catrs: [...state.carts, action.payload],
//         numberOfCarts: state.numberOfCarts + 1,
//       };

//     default:
//       return state;
//   }
// };

// Combine Reducer
// const rootReducer = combineReducers({
//   productR: productReducer,
//   cartR: cartReducer,
// });

// Create Store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

// Products
store.dispatch(getProducts());
store.dispatch(addProduct(["Mobile"], ["Laptop"]));
// Carts
// store.dispatch(getCart());
// store.dispatch(addCart("Lamp"));
