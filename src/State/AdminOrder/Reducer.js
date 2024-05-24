import {
  CANCELLED_ORDER_FAILURE,
  CANCELLED_ORDER_REQUEST,
  CANCELLED_ORDER_SUCCESS,
  CONFIRM_ORDER_FAILURE,
  CONFIRM_ORDER_REQUEST,
  CONFIRM_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVER_ORDER_FAILURE,
  DELIVER_ORDER_REQUEST,
  DELIVER_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  SHIPP_ORDER_FAILURE,
  SHIPP_ORDER_REQUEST,
  SHIPP_ORDER_SUCCESS,
} from "./ActionType";

const initial_state = {
  error: "",
  isLoading: false,
  orders: [],
};
export const adminOrderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { ...state, isLoading: true, };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };
    case GET_ORDER_FAILURE:
      return { ...state, isLoading: false, error: action.payload, orders: [] };
    case CONFIRM_ORDER_REQUEST:
    case DELIVER_ORDER_REQUEST:
    case CANCELLED_ORDER_REQUEST:
      return { ...state, isLoading: true };
    case CONFIRM_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        confirmed: action.payload,
      };
    case DELIVER_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        delivered: action.payload,
      };
    case CANCELLED_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cancelled: action.payload,
      };
    case CANCELLED_ORDER_FAILURE:
    case DELIVER_ORDER_FAILURE:
    case CONFIRM_ORDER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case SHIPP_ORDER_REQUEST:
        return { ...state, isLoading: true, };
    case SHIPP_ORDER_SUCCESS:
        return {
            ...state,
            isLoading: false,
            shipped: action.payload
          };
    case SHIPP_ORDER_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
    case DELETE_ORDER_REQUEST:
      return { ...state, isLoading: true};
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleted: action.payload
      };
    case DELETE_ORDER_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
    default:
     return state;
  }
};
