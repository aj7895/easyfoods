import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";

const Header = () => {
  const [dropmenu, setDropMenu] = useState(false);
  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("currentUser"));
  const cartReducerState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducerState;
  const handleDropdown = () => {
    !dropmenu ? setDropMenu(true) : setDropMenu(false);
  };
  if (
    window.location.pathname === "/admin" ||
    window.location.pathname === "/admin/products" ||
    window.location.pathname === "/admin/users"
  )
    return null;
  else
    return (
      <div className="">
        <nav className=" px-4 sm:px-6  lg:px-28 flex h-20 items-center justify-between lg:flex-wrap">
          <Link to="/">
            <img className="mr-20 -mt-1" src="/logo.svg"></img>
          </Link>
          <div className="flex lg:flex-grow items-center lg:w-auto">
            <div className="text-[15px] flex lg:flex-grow">
              <a
                href="#"
                className="hidden mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-200 lg:mr-12"
              >
                Get the App
              </a>
              <Link
                to="/store"
                href="#responsive-header"
                className="hidden mt-4 lg:inline-block lg:mt-0 text-gray-700  hover:text-gray-200 lg:mr-12"
              >
                Order food online
              </Link>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 mr-3 lg:mr-0 text-gray-700  hover:text-gray-200"
              >
                Go out for meal
              </a>
            </div>
            <Link to="/cart">
              <div className="flex mr-16 gap-1 items-center ">
                <svg
                  className="fill-stroke text-gray-700"
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 5H21"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-gray-800 mt-5 text-[15px] font-medium">
                  {cartItems.length}
                </p>
              </div>
            </Link>
            <div className="hidden lg:inline-flex">
              {User ? (
                <div className="flex items-center gap-2 mt-1">
                  {/*  */}
                  <div className="flex justify-center">
                    <div>
                      <div className="dropdown relative">
                        <button
                          onClick={handleDropdown}
                          className="
          px-6
          py-2.5
          bg-green-100
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-green-100 hover:shadow-lg
          focus:bg-greem-100 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-100 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                        >
                          <div className="w-7 h-7 border-2 border-white rounded-full mr-3 bg-cover bg-center">
                            <img
                              src={User.image}
                              alt
                              className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                            />
                          </div>
                          {User.name}
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            className="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                          </svg>
                        </button>
                        {dropmenu && (
                          <ul
                            className="
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
                          >
                            <li>
                              <Link
                                to="/profile"
                                className="
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                              >
                                Edit your Profile
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/wishlist"
                                className="
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                              >
                                Wishlist
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/order"
                                className="
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                              >
                                Orders
                              </Link>
                            </li>
                            <li>
                              <a
                                className="
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                                onClick={() => {
                                  dispatch(logoutUser());
                                }}
                              >
                                Logout
                              </a>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              ) : (
                <Link className="text-gray-900" to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;
