import { api } from "../../Config/apiConfig";
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

export const getAllOrder = () => async (dispatch) => {
  dispatch({ type: GET_ORDER_REQUEST });
  try {
    const order = await api.get("/api/admin/orders/");
    dispatch({ type: GET_ORDER_SUCCESS, payload: order.data });
  } catch (error) {
    dispatch({ type: GET_ORDER_FAILURE, payload: error.message });
  }
};
export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRM_ORDER_REQUEST });
  try {
    const order = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    dispatch({ type: CONFIRM_ORDER_SUCCESS, payload: order.data });
  } catch (error) {
    dispatch({ type: CONFIRM_ORDER_FAILURE, payload: error.message });
  }
};
export const cancelOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CANCELLED_ORDER_REQUEST });
  try {
    const {order} = await api.put(`/api/admin/orders/${orderId}/cancel`);
    dispatch({ type: CANCELLED_ORDER_SUCCESS, payload: order });
  } catch (error) {
    dispatch({ type: CANCELLED_ORDER_FAILURE, payload: error.message });
  }
};
export const deleteOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER_REQUEST });
  try {
    const order = await api.delete(`/api/admin/orders/${orderId}/delete`);
    dispatch({ type: DELETE_ORDER_SUCCESS, payload: order.data });
  } catch (error) {
    dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
  }
};
export const deliverOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELIVER_ORDER_REQUEST });
  try {
    const order = await api.put(`/api/admin/orders/${orderId}/deliver`);
    dispatch({ type: DELIVER_ORDER_SUCCESS, payload: order.data });
  } catch (error) {
    dispatch({ type: DELIVER_ORDER_FAILURE, payload: error.message });
  }
};
export const shipOrder = (orderId) => async (dispatch) => {
    dispatch({ type: SHIPP_ORDER_REQUEST });
    try {
      const order = await api.put(`/api/admin/orders/${orderId}/ship`);
      dispatch({ type: SHIPP_ORDER_SUCCESS, payload: order.data });
    } catch (error) {
      dispatch({ type: SHIPP_ORDER_FAILURE, payload: error.message });
    }
  };