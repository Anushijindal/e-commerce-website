import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  ORDER_HISTORY_FAILURE,
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_SUCCESS,
} from "./ActionType";

const initial_state = {
  orders: [],
  order: null,
  error: null,
  isLoading: false,
  history:null
};
export const orderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CREATE_ORDER_SUCCESS:
      return { ...state, isLoading: false, error: null, order: action.payload };
    case CREATE_ORDER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GET_ORDER_BY_ID_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_ORDER_BY_ID_SUCCESS:
      return { ...state, isLoading: false, error: null, order: action.payload };
    case GET_ORDER_BY_ID_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
      case ORDER_HISTORY_REQUEST:
        return { ...state, isLoading: true, error: null };
        case ORDER_HISTORY_SUCCESS:
      return { ...state, isLoading: false, error: null, history: action.payload };
          case ORDER_HISTORY_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
