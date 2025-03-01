// Working Procedure.
// 1. Action.
// 2. State-Object-> type,plyload/data.
// 3. Reducer.
// 4. Store -> getState(),dispatch(),subscribe().

// Redux importes
const { createStore } = require("redux");

// All Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESST";

// State
const initialCounterState = {
  count: 0,
};
// Action
const actionCounterIncrement = () => {
  return {
    type: INCREMENT,
  };
};
// Action
const actionCounterDecrement = () => {
  return {
    type: DECREMENT,
  };
};
// Action
const actionCounterReset = () => {
  return {
    type: RESET,
  };
};
// Reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 2,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

// Create Store
const store = createStore(counterReducer);

// Subscribe store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Action

store.dispatch(actionCounterIncrement());
store.dispatch(actionCounterIncrement());
store.dispatch(actionCounterIncrement());
store.dispatch(actionCounterReset());
