import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// antd css
import "antd/dist/antd.min.css";
// components
import Header from "./components/Header";
// pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Store from "./pages/Store";
import Order from "./pages/Order";
import OrderInfo from "./pages/OrderInfo";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/store" exact component={Store} />
        <Route path="/cart" component={Cart} />
        <Route path="/order" component={Order} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/orderinfo/:orderid" component={OrderInfo} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
