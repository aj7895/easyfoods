import axios from "axios";
import { message } from "antd";

// registering new user
export const registerNewUser = (newUser) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  await axios
    .post("/api/users/register", newUser)
    .then((response) => {
      dispatch({ type: "USER_REGISTER_SUCCESS" });
      message.success("User registered successfully");
    })
    .catch((error) => {
      dispatch({ type: "USER_REGISTER_FAILED" });
      message.success("User registertion failed");
    });
};

// login user
export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  await axios
    .post("/api/users/login", user)
    .then((response) => {
      dispatch({ type: "USER_LOGIN_SUCCESS" });
      message.success("User login success");
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "USER_LOGIN_FAILED" });
      message.success("User registertion failed");
    });
};

// logout user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cartItems");
  dispatch({ type: "USER_LOGOUT" });
  window.location.href = "/login";
};

// updating user profile
export const updateUser = (userid, updatedValue) => async (dispatch) => {
  dispatch({ type: "USER_UPDATE_REQUEST" });
  await axios
    .post("/api/users/updateuser", {
      userid,
      updatedValue,
    })
    .then((response) => {
      dispatch({ type: "USER_UPDATE_SUCCESS" });
      message.success("User update successfully");
    })
    .catch((error) => {
      dispatch({ type: "USER_UPDATE_FAILED" });
      message.success("User update failed");
    });
};

// get all the users
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_ALLUSERS_REQUEST" });
  await axios
    .get("/api/users/getallusers")
    .then((response) => {
      dispatch({ type: "GET_ALLUSERS_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_ALLUSERS_FAILED" });
    });
};

// deleting a user
export const deleteUser = (userid) => async (dispatch) => {
  dispatch({ type: "DELETE_USER_REQUEST" });
  await axios
    .post("/api/users/deleteuser", { userid })
    .then((response) => {
      dispatch({ type: "DELETE_USER_SUCCESS", payload: response.data });
      window.location.href = "/admin/users";
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "DELETE_USER_FAILED", payload: error });
    });
};

// set type of user
export const editUser = (userid, editedValue) => async (dispatch) => {
  dispatch({ type: "USER_EDIT_REQUEST" });
  await axios
    .post("/api/users/edituser", {
      userid,
      editedValue,
    })
    .then((response) => {
      dispatch({ type: "USER_EDIT_SUCCESS" });
      message.success("User edited successfully");
    })
    .catch((error) => {
      dispatch({ type: "USER_EDIT_FAILED" });
      message.success("User edited failed");
    });
};
