import { api } from "../../Config/apiConfig";
import { FIND_USER_BY_ID_FAILURE, FIND_USER_BY_ID_REQUEST, FIND_USER_BY_ID_SUCCESS, GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "./ActionType"

export const getAllUsers=()=>async(dispatch)=>{
    dispatch({type:GET_ALL_USERS_REQUEST});
    try {
        const response=await api.get("/api/users/");
        dispatch({type:GET_ALL_USERS_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:GET_ALL_USERS_FAILURE,payload:error.message})
    }
};
export const findUserById=(userId)=>async(dispatch)=>{
    dispatch({type:FIND_USER_BY_ID_REQUEST});
    try {
        const response=await api.post(`/api/users/${userId}`);
        dispatch({type:FIND_USER_BY_ID_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:FIND_USER_BY_ID_FAILURE,payload:error.message})
    }
}