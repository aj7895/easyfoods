import axios from "axios";
import { message } from "antd";

export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((response) => {
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_PRODUCTS_FAILED", payload: error });
      console.log(error);
    });
};

export const getProductById = (productid) => (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID_REQUEST" });
  axios
    .post("/api/products/getproductbyid", { productid })
    .then((response) => {
      dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: error });
      console.log(error);
    });
};

// filtering products
export const filterProducts = (search, sort, category) => (dispatch) => {
  let filteredProducts = "";
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((response) => {
      filteredProducts = response.data;
      if (search) {
        filteredProducts = response.data.filter((product) => {
          return product.name.toLowerCase().includes(search);
        });
      }
      if (sort !== "popular") {
        if (sort == "htl") {
          filteredProducts = response.data.sort((a, b) => {
            return -a.price + b.price;
          });
        } else {
          filteredProducts = response.data.sort((a, b) => {
            return a.price - b.price;
          });
        }
      }
      if (category !== "all") {
        filteredProducts = response.data.filter((product) => {
          return product.category.toLowerCase().includes(category);
        });
      }
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredProducts });
    })
    .catch((error) => {
      dispatch({ type: "GET_PRODUCTS_FAILED" });
    });
};

// adding product review
export const addProductReview = (review, productId) => (dispatch, getState) => {
  dispatch({ type: "ADD_PRODUCT_REVIEW_REQUEST" });
  const currentUser = getState().userLoginReducer.currentUser;
  axios
    .post("/api/products/addreview", { review, productId, currentUser })
    .then((response) => {
      dispatch({ type: "ADD_PRODUCT_REVIEW_SUCCESS" });
      message.success("Review added successfully");
    })
    .catch((error) => {
      dispatch({ type: "ADD_PRODUCT_REVIEW_FAILED" });
    });
};

// deleting a product
export const deleteProduct = (productid) => async (dispatch) => {
  dispatch({ type: "DELETE_PRODUCTS_REQUEST" });
  await axios
    .post("/api/products/deleteproduct", { productid })
    .then((response) => {
      dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: response.data });
      window.location.href = "/admin/products";
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "DELETE_PRODUCT_FAILED", payload: error });
    });
};

// inserting a product
export const addProduct = (product) => async (dispatch) => {
  dispatch({ type: "ADD_PRODUCTS_REQUEST" });
  await axios
    .post("/api/products/addproduct", product)
    .then((response) => {
      dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: response.data });
      message.success("Product added successfully");
      window.location = "/admin/products";
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "ADD_PRODUCT_FAILED", payload: error });
      message.warn("Product cannot be inserted try again later");
    });
};

// updating a product
export const updateProduct = (productid, product) => async (dispatch) => {
  dispatch({ type: "UPDATE_PRODUCTS_REQUEST" });
  await axios
    .post("/api/products/updateproduct", { productid, product })
    .then((response) => {
      dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: response.data });
      message.success("Product updated successfully");
      window.location = "/admin/products";
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "UPDATE_PRODUCT_FAILED", payload: error });
      message.warn("Product cannot be updated now please try again later");
    });
};
