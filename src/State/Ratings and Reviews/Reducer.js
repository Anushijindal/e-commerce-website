import {
  CREATE_RATING_FAILURE,
  CREATE_RATING_REQUEST,
  CREATE_RATING_SUCCESS,
  CREATE_REVIEW_FAILURE,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  GET_ALL_RATING_FAILURE,
  GET_ALL_RATING_REQUEST,
  GET_ALL_RATING_SUCCESS,
  GET_ALL_REVIEW_FAILURE,
  GET_ALL_REVIEW_REQUEST,
  GET_ALL_REVIEW_SUCCESS,
} from "./ActionType";

const initial_state = {
  error: '',
  isLoading: false,
  rating: [],
  review: [],
};
export const ratingReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CREATE_RATING_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case CREATE_RATING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        rating: [...state.rating, action.payload],
      };
    case CREATE_RATING_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case CREATE_REVIEW_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        review: [...state.review, action.payload],
      };
    case CREATE_REVIEW_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GET_ALL_RATING_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case GET_ALL_RATING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        rating: action.payload,
      };
    case GET_ALL_RATING_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GET_ALL_REVIEW_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case GET_ALL_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        review: action.payload,
      };
    case GET_ALL_REVIEW_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
