import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../redux/actions/orderActions";
import { useDispatch } from "react-redux";

const Checkout = ({ amount }) => {
  const currentUser = localStorage.getItem("currentUser");

  function validateUser() {
    if (!currentUser) {
      window.location = "/login";
    }
  }
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, amount));
  }
  return (
    <div>
      <StripeCheckout
        name="Easyfoods"
        token={tokenHandler}
        amount={amount * 100}
        shippingAddress
        currency="INR"
        stripeKey="pk_test_51KMZp3ImZKNDHkIfWY8dc2mzFHqlryNFBdJxaizrN7tWyF3X3NDODAnzxNGsiIOYATHAnR0wy2nN56AtAHOKV6tl00wJDE7VWH"
      >
        <button
          onClick={validateUser}
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
        >
          Checkout
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
