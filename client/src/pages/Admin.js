import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { message } from "antd";

// components
import Adminbar from "../components/Adminbar";
import Users from "./Users";
import Products from "./Products";

const Admin = () => {
  const getUser = useSelector((state) => state.userLoginReducer);
  const currentUser = getUser.currentUser;
  useEffect(() => {
    if (currentUser) {
      if (!currentUser.isAdmin) {
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        message.error("you are not allowed to access this admin page");
      }
    } else {
      window.location.href = "/";
    }
  }, []);
  return (
    <BrowserRouter>
      <Adminbar />
      <Route exact path="/admin/users" component={Users} />
      <Route exact path="/admin/products" component={Products} />
    </BrowserRouter>
  );
};

export default Admin;
