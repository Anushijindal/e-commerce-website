import {
  FIND_USER_BY_ID_FAILURE,
  FIND_USER_BY_ID_REQUEST,
  FIND_USER_BY_ID_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from "./ActionType";

const initial_state = {
  error: null,
  isLoading: false,
  users: [],
  user: [],
};
export const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return { ...state, isLoading: true };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, isLoading: false, users: action.payload };
    case GET_ALL_USERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case FIND_USER_BY_ID_REQUEST:
      return { ...state, isLoading: true };
    case FIND_USER_BY_ID_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case FIND_USER_BY_ID_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
