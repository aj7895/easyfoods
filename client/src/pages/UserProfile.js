import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/userActions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const userState = useSelector((state) => state.userLoginReducer);
  const currentUser = userState.currentUser;

  //   hooks for getting and setting
  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    image: "",
    password: "",
    confirmpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const updateValue = (e) => {
    e.preventDefault();
    if (values.password == values.confirmpassword) {
      const updatedValue = {
        name: values.name,
        username: values.username,
        email: values.email,
        image: values.image,
      };
      dispatch(updateUser(currentUser._id, updatedValue));
    } else {
      console.log("password cannot be verified");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="xl:w-10/12 w-full px-8">
          <form>
            <div className="xl:px-24">
              {/*  */}
              {toggle && (
                <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                          fill="#4B5563"
                        />
                      </svg>
                    </div>

                    <p className="text-sm text-gray-800 pl-3">
                      We take privacy issues seriously. You can be sure that
                      your personal data is securely protected.
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
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                <div className="w-80">
                  <div className="flex items-center">
                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                      Personal Information
                    </h1>
                  </div>
                  <p className="mt-4 text-sm leading-5 text-gray-600">
                    Information about the section could go here and a brief
                    description of how this might be used.
                  </p>
                </div>
                <div>
                  <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="firstName"
                      >
                        Full name
                      </label>
                      <input
                        onChange={handleInputs}
                        name="name"
                        value={values.name}
                        type="text"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="John"
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="lastName"
                      >
                        Username
                      </label>
                      <input
                        onChange={handleInputs}
                        name="username"
                        value={values.username}
                        type="text"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center lg:ml-24 mt-8">
                    <div className="md:w-64">
                      <label className="text-sm leading-none text-gray-800">
                        Email address
                      </label>
                      <input
                        onChange={handleInputs}
                        name="email"
                        value={values.email}
                        type="email"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="youremail@example.com"
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label className="text-sm leading-none text-gray-800">
                        Image
                      </label>
                      <input
                        onChange={handleInputs}
                        name="image"
                        value={values.image}
                        type="text"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="Place your image url here"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                <div className="w-80">
                  <div className="flex items-center">
                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                      Security
                    </h1>
                  </div>
                  <p className="mt-4 text-sm leading-5 text-gray-600">
                    Information about the section could go here and a brief
                    description of how this might be used.
                  </p>
                </div>
                <div>
                  <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="password"
                      >
                        Password
                      </label>
                      <input
                        onChange={handleInputs}
                        name="password"
                        value={values.password}
                        type="password"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="securityCode"
                      >
                        Verify Password
                      </label>
                      <input
                        onChange={handleInputs}
                        name="confirmpassword"
                        value={values.confirmpassword}
                        type="password"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="Enter your security code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <button
              onClick={updateValue}
              className="float-right bg-green-500 text-white rounded px-3 py-1 tracking-wide"
            >
              Update
            </button>
          </form>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
