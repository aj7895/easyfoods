import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../redux/actions/orderActions";

const OrderInfo = ({ match }) => {
  const dispatch = useDispatch();
  const getOrder = useSelector((state) => state.getOrderByIdReducer);
  const { order, loading, error } = getOrder;
  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  console.log(order);
  return (
    <>
      {order &&
        order.map((item) => (
          <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className=" w-[10%] xl:w-[10%] md:block hidden">
              {item.orderItems.map((item) => (
                <img className="mt-6 rounded w-full" src={item.image} />
              ))}
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
              <div className="border-b border-gray-200 pb-6">
                {item.orderItems.map((item) => (
                  <h1
                    className="
                             lg:text-2xl
                             text-xl
                             font-semibold
                             lg:leading-6
                             leading-7
                             text-gray-800
                             mt-2
                         "
                  >
                    {item.name}
                  </h1>
                ))}
              </div>
              <div className="py-4 flex items-center justify-between">
                <p className="text-base leading-4 text-gray-800">Colours</p>
                <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600">
                    Smoke Blue with red accents
                  </p>
                  <div
                    className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
                  ></div>
                </div>
              </div>
              <div className="py-4 flex items-center justify-between">
                <p className="text-base leading-4 text-gray-800">Total</p>
                <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600 mr-3">
                    {item.orderAmount} Rs/-
                  </p>
                </div>
              </div>
              <div>
                <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  rerum dicta enim sunt ducimus sit adipisci corrupti excepturi
                  odio consequatur! Sint autem dolore expedita aut perspiciatis
                  omnis.
                </p>
                <p className="text-base leading-4 mt-7 text-gray-600">
                  Order Id: {item._id}
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Ordered At: {item.createdAt.substring(0, 10)}
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  Delivery Partner: zedtail
                </p>
              </div>
              <div>
                <div className="border-t border-b py-4 mt-7 border-gray-200">
                  <div
                    onClick={() => setShow(!show)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-base leading-4 text-gray-800">
                      Shipping and returns
                    </p>
                    <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded">
                      <svg
                        className={
                          "transform " + (show ? "rotate-180" : "rotate-0")
                        }
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1L5 5L1 1"
                          stroke="#4B5563"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={
                      "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                      (show ? "block" : "hidden")
                    }
                    id="sect"
                  >
                    You will be responsible for paying for your own shipping
                    costs for returning your item. Shipping costs are
                    nonrefundable
                  </div>
                </div>
              </div>
              <div>
                <div className="border-b py-4 border-gray-200">
                  <div
                    onClick={() => setShow2(!show2)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-base leading-4 text-gray-800">
                      Contact us
                    </p>
                    <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded">
                      <svg
                        className={
                          "transform " + (show2 ? "rotate-180" : "rotate-0")
                        }
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1L5 5L1 1"
                          stroke="#4B5563"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={
                      "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                      (show2 ? "block" : "hidden")
                    }
                    id="sect"
                  >
                    If you have any questions on how to return your item to us,
                    contact us.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default OrderInfo;
