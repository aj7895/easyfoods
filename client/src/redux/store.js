import { getAllProductsReducer } from "./reducers/productReducers";
import {
  getProductByIdReducer,
  addProductReviewReducer,
  deleteProductReducer,
  addProductReducer,
  updateProductReducer,
} from "./reducers/productReducers";
import {
  registerNewUserReducer,
  userLoginReducer,
  updateUserReducer,
  getAllUsersReducer,
  deleteUserReducer,
  editUserReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import { placeOrderReducer } from "./reducers/orderReducers";
import {
  getOrderByUserIdReducer,
  getOrderByIdReducer,
} from "./reducers/orderReducers";
import { wishlistReducer } from "./reducers/wishlistReducer";

import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  userLoginReducer: userLoginReducer,
  updateUserReducer: updateUserReducer,
  placeOrderReducer: placeOrderReducer,
  getOrderByUserIdReducer: getOrderByUserIdReducer,
  getOrderByIdReducer: getOrderByIdReducer,
  addProductReviewReducer: addProductReviewReducer,
  updateProductReducer: updateProductReducer,
  wishlistReducer: wishlistReducer,
  getAllUsersReducer: getAllUsersReducer,
  deleteUserReducer: deleteUserReducer,
  deleteProductReducer: deleteProductReducer,
  addProductReducer: addProductReducer,
  editUserReducer: editUserReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const wishlistItems = localStorage.getItem("wishlistItems")
  ? JSON.parse(localStorage.getItem("wishlistItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: { cartItems: cartItems },
  userLoginReducer: { currentUser: currentUser },
  wishlistReducer: { wishlistItems: wishlistItems },
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
