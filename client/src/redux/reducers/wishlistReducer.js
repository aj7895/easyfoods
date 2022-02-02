export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const itemAlreadyInWishlist = state.wishlistItems.find(
        (item) => item._id == action.payload._id
      );

      if (itemAlreadyInWishlist) {
        return {
          ...state,
          wishlistItems: state.wishlistItems.map((item) =>
            item._id == action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, action.payload],
        };
      }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter((item) => {
          return item._id != action.payload._id;
        }),
      };

    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlistItems: [],
      };

    default:
      return state;
  }
};
