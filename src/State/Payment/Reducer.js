import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
} from "./ActionType";

const initialState = {
//   error: null,
//   isLoading: false,
//   payment: null,
//   payments: [],
};
const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        success: true,
        paymentResult: action.payload,
      };
    case CREATE_PAYMENT_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case UPDATE_PAYMENT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case UPDATE_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        payment: action.payload,
      };
    case UPDATE_PAYMENT_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
