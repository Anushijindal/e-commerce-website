import { api } from "../../Config/apiConfig";
import {
  CREATE_PRODUCTS_FAILURE,
  CREATE_PRODUCTS_REQUEST,
  CREATE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findProducts = (userData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  try {
    const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
    } = userData;
    const { data } = await api.get(
      `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}
      &minDiscount=${minDiscount}&category=${category}&stock=${stock}
      &sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    console.log("products data",data)
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};
export const findProductsById = (userData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  try {
    const { productId } = userData;
    const { data } = await api.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
export const deleteProduct=(productId)=>async(dispatch)=>{
  dispatch({type:DELETE_PRODUCTS_REQUEST})
  try {
    const {data}=await api.delete(`/api/admin/products/${productId}`)
    dispatch({type:DELETE_PRODUCTS_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type:DELETE_PRODUCTS_FAILURE,payload:error.message})
  }
};
export const createProduct=(reqData)=>async(dispatch)=>{
  dispatch({type:CREATE_PRODUCTS_REQUEST})
  try {
    const {data}=await api.post(`/api/admin/products/`,reqData)
    dispatch({type:CREATE_PRODUCTS_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type:CREATE_PRODUCTS_FAILURE,payload:error.message})
  }
};