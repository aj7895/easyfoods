export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PLACE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "PLACE_ORDER_Failed":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getOrderByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ORDERBYUSERID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDERBYUSERID_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case "GET_ORDERBYUSERID_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getOrderByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ORDERBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDERBYID_SUCCESS":
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case "GET_ORDERBYID_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
