import { message } from "antd";

export const addToWishlist = (product) => (dispatch, getState) => {
  const wishlistItem = {
    name: product.name,
    _id: product._id,
    price: product.price,
    image: product.image,
    category: product.category,
    desc: product.desc,
  };

  dispatch({ type: "ADD_TO_WISHLIST", payload: wishlistItem });
  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlistReducer.wishlistItems)
  );
  message.success("Added to Wishlist");
};

export const removeFromWishlist = (item) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
  localStorage.setItem(
    "wislistItems",
    JSON.stringify(getState().wishlistReducer.wishlistItems)
  );
  message.info("Removed from wishlist");
};

export const clearWishlist = () => (dispatch, getState) => {
  dispatch({ type: "CLEAR_WISHLIST" });
  localStorage.setItem(
    "wislistItems",
    JSON.stringify(getState().wishlistReducer.wishlistItems)
  );
  message.info("Wishlist cleared");
};
