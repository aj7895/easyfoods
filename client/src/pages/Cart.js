import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import Checkout from "../components/Checkout";

const { Option } = Select;

const Cart = () => {
  const dispatch = useDispatch();
  const cartReducerState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducerState;
  const deliveryCharge = 50;
  const [toggle, setToggle] = useState(true);
  const [discount, setDiscount] = useState(0);
  let totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const promoCode = "79bc7c";
  function validatePromo(e) {
    let promo = e.target.value;
    if (promo == promoCode) {
      setDiscount(10);
    }
  }
  let discountAmount = (totalAmount * discount) / 100;
  let subTotal = totalAmount + deliveryCharge - discountAmount;

  console.log(cartItems);
  return (
    <>
      {toggle && (
        <div className="px-5 w-[1200px] mx-auto shadow bg-gray-50 rounded-lg flex items-center justify-between mt-7">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/64/000000/external-coupon-e-commerce-kmg-design-flat-kmg-design.png" />
            </div>

            <p className="text-sm mt-4 text-gray-800 pl-20 uppercase">
              Use the promo code
              <span className="text-blue-500 px-2 text-lg font-semibold">
                {promoCode}
              </span>
              for instant discount upto 10 % on your orders
            </p>
          </div>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z"
                fill="#79808F"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {cartItems.map((item) => (
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-44">
                    <img className="rounded" src={item.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-3">
                    <div className="flex gap-2 items-center">
                      <span className="font-bold text-md">{item.name}</span>
                      <span className="text-red-500 text-md">
                        {item.category}
                      </span>
                    </div>
                    <div>{item.desc}</div>

                    <button
                      className="w-[70px] my-3 border rounded"
                      onClick={() => {
                        dispatch(removeFromCart(item));
                      }}
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <Select
                    defaultValue={item.quantity}
                    onChange={(value) => {
                      dispatch(addToCart(item, value));
                    }}
                    style={{ width: 52 }}
                  >
                    {[...Array(item.countInStock).keys()].map((x, i) => {
                      return <Option value={i + 1}>{i + 1}</Option>;
                    })}
                  </Select>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {item.price} Rs/-
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {item.quantity * item.price} Rs/-
                </span>
              </div>
            ))}
            <Link
              to="/store"
              className="flex font-semibold text-gray-600 text-sm mt-10"
            >
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cartItems.length}
              </span>
              <span className="font-semibold text-sm">{totalAmount} Rs/-</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Delivery charges - 50.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                for="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                onChange={validatePromo}
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>{subTotal} Rs/-</span>
              </div>
              <Checkout amount={subTotal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
