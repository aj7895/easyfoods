import axios from "axios";
import { message } from "antd";

export const placeOrder = (token, amount) => (dispatch, getState) => {
  const currentUser = getState().userLoginReducer.currentUser;
  const inTheCart = getState().cartReducer.cartItems;
  const cartItems = new Array();
  // for removing cart in stock from array thats why we will loop through and remove it and save new array
  for (let i = 0; i < inTheCart.length; i++) {
    let item = {
      name: inTheCart[i].name,
      quantity: inTheCart[i].quantity,
      price: inTheCart[i].price,
      _id: inTheCart[i]._id,
      image: inTheCart[i].image,
    };
    // pushing in the array
    cartItems.push(item);
  }

  dispatch({ type: "PLACE_ORDER_REQUEST" });
  console.log(cartItems);
  axios
    .post("/api/orders/placeorder", {
      token,
      amount,
      currentUser,
      cartItems,
    })
    .then((response) => {
      dispatch({ type: "PLACE_ORDER_SUCCESS" });
      console.log(response);
      message.success("Order placed successfully");
    })
    .catch((error) => {
      dispatch({ type: "PLACE_ORDER_FAILED" });
      message.error("Order failed please try again later");
    });
};

// for paricular user orders
export const getOrderByUserId = () => (dispatch, getState) => {
  const userId = getState().userLoginReducer.currentUser._id;
  dispatch({ type: "GET_ORDERBYUSERID_REQUEST" });
  axios
    .post("/api/orders/getordersbyuserid", { userId: userId })
    .then((response) => {
      console.log(response.data);
      dispatch({ type: "GET_ORDERBYUSERID_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_ORDERBYUSERID_FAILED", payload: error });
    });
};

// for getting order by id
export const getOrderById = (orderId) => (dispatch, getState) => {
  dispatch({ type: "GET_ORDERBYID_REQUEST" });
  axios
    .post("/api/orders/getorderbyid", { orderId: orderId })
    .then((response) => {
      dispatch({ type: "GET_ORDERBYID_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_ORDERBYID_FAILED", payload: error });
    });
};
