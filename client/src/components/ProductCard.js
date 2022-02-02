import React, { useState } from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { addToWishlist } from "../redux/actions/wishlistAction";

// components
import Review from "../components/Review";

const { Option } = Select;
const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  function addToBag() {
    dispatch(addToCart(product, quantity));
  }
  function handleWishlist() {
    dispatch(addToWishlist(product));
  }

  return (
    <div>
      <div className="card max-w-sm h-[470px] bg-white px-4 pt-6 pb-2 rounded-xl shadow transform hover:scale-105 transition duration-300">
        <div className="relative">
          <img
            className="min-w-[18rem] object-cover rounded-xl"
            src={product.image}
            alt={product.name}
          />
          <div className="absolute top-0 flex gap-[9.3rem]">
            <p className="bg-[#D2FDE3] flex gap-1 text-gray-500 font-bold py-2 px-3 rounded-br-lg rounded-tl-lg">
              {product.price} <span> Rs/- </span>
            </p>
            <div>
              <button
                onClick={handleWishlist}
                className="inline-flex wishlist rounded-full w-10 h-10 shadow-lg bg-[#ffffff] m-2 p-0 border-0  items-center justify-center text-gray-200 hover:text-red-400 transition duration-300 ml-4"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
            {product.name}
          </h1>
          {/*  */}
          <Review product={product} />
          {/*  */}
        </div>
        <div className="">
          <div className="flex space-x-1 text-gray-600 justify-between items-center">
            Delivery Time
            <div className="flex gap-1 pt-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 mb-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p className="text-gray-600">23 Minutes</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Select
              defaultValue={quantity}
              onChange={(value) => {
                setQuantity(value);
              }}
              style={{ width: 52 }}
            >
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <Option value={i + 1}>{i + 1}</Option>;
              })}
            </Select>
            <button
              onClick={addToBag}
              className="text-md flex items-center gap-2 px-7 text-white text-xl bg-red-400 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
