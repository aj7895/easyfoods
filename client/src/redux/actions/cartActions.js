import { message } from "antd";

export const addToCart = (product, quantity) => (dispatch, getState) => {
  const cartItem = {
    name: product.name,
    _id: product._id,
    price: product.price,
    countInStock: product.countInStock,
    quantity: quantity,
    image: product.image,
    category: product.category,
    desc: product.desc,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
  message.success("Added to cart");
};

export const removeFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: item });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
  message.info("Removed from cart");
};
