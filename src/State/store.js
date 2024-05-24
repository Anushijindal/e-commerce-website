import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { adminOrderReducer } from "./AdminOrder/Reducer";
import { userReducer } from "./User/Reducer";
import { ratingReducer } from "./Ratings and Reviews/Reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    products:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    adminOrder:adminOrderReducer,
    users:userReducer,
    rating:ratingReducer,
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));