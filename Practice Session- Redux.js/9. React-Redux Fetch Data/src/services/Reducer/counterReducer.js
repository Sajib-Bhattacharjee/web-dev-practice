import { INCREMENT, DECREMENT, RESET } from "../Constant/counterConstant";
// State
const initialCounterState = { count: 0 };

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
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
export default counterReducer;
