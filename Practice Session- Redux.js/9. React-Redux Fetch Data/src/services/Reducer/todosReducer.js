import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../Constant/todosConstant";

const initialState = {
  isLoading: true,
  todos: [],
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
      };

    case GET_TODOS_FAILED:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
