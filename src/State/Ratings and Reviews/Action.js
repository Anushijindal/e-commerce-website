import { api } from "../../Config/apiConfig";
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

export const createRating = (resData) => async (dispatch) => {
  dispatch({ type: CREATE_RATING_REQUEST });
  try {
    const { data } = await api.post(`/api/ratings/create`,resData);
    console.log(data);
    dispatch({ type: CREATE_RATING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_RATING_FAILURE, payload: error.message });
  }
};
export const getAllRatings = (productId) => async (dispatch) => {
  dispatch({ type: GET_ALL_RATING_REQUEST });
  try {
    const { data } = await api.put(`/api/ratings/product/${productId}`);
    console.log(data);
    dispatch({ type: GET_ALL_RATING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_RATING_FAILURE, payload: error.message });
  }
};
// export const createReview = (resData) => async (dispatch) => {
//     dispatch({ type: CREATE_REVIEW_REQUEST });
//     try {
//       const { data } = await api.post(`/api/reviews/create`,resData);
//       console.log(data);
//       dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: CREATE_REVIEW_FAILURE, payload: error.message });
//     }
//   };
//   export const getAllReviews = (productId) => async (dispatch) => {
//     dispatch({ type: GET_ALL_REVIEW_REQUEST });
//     try {
//       const { data } = await api.put(`/api/ratings/product/${productId}`);
//       console.log(data);
//       dispatch({ type: GET_ALL_REVIEW_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: GET_ALL_REVIEW_FAILURE, payload: error.message });
//     }
//   };
  