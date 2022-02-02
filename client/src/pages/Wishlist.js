import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearWishlist } from "../redux/actions/wishlistAction";

const Wishlist = () => {
  const getWishlist = useSelector((state) => state.wishlistReducer);
  const { wishlistItems } = getWishlist;
  console.log(wishlistItems);
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearWishlist());
  };

  return (
    <>
      {/*  */}
      {toggle && (
        <div className="px-5 w-[1200px] mx-auto shadow bg-gray-50 rounded-lg flex items-center justify-between mt-7">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="https://img.icons8.com/ios/34/000000/wish-list.png" />
            </div>

            <p className="text-sm mt-4 text-gray-800 pl-10 uppercase">
              Clear all the wishlist items
              <span
                onClick={clear}
                className="text-gray-800 px-2 text-[15px] ml-9 font-semibold cursor-pointer"
              >
                Clear
              </span>
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

      {/*  */}
      <div className="flex flex-wrap px-20 gap-14 mb-20 justify-center mt-20">
        {wishlistItems.map((product) => (
          <div className="mx-2 w-72 lg:mb-0  overflow-hidden rounded-md mb-8">
            <div>
              <img src={product.image} className="w-full h-52 object-cover" />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div
                  className={
                    product.category == "veg"
                      ? "bg-green-400 flex items-center justify-center h-10 w-24 rounded-full"
                      : "bg-red-400 flex items-center justify-center h-10 w-24 rounded-full"
                  }
                >
                  <p className="text-xs text-white font-semibold mt-2">
                    {product.category}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-10">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-xs text-gray-600 pl-5">in just 25 mins</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">{product.desc}</p>
                <div className="flex items-center justify-between py-4">
                  <button className="text-gray-700 border border-gray-100 p-1 px-2 text-xs font-semibold">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
