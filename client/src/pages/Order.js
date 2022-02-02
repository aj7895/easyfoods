import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderByUserId } from "../redux/actions/orderActions";
import { Link } from "react-router-dom";
const Order = () => {
  const getOrders = useSelector((state) => state.getOrderByUserIdReducer);
  const { orders, error, loading } = getOrders;
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getOrderByUserId());
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);

  return (
    <section className="antialiased bg-gray-100 text-gray-600 py-20 px-4">
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-lg text-gray-800">My orders</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>

                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Transaction Id
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Order Placed At
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Price</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Location</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Order status
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {orders &&
                    orders.map((order) => (
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            {order.orderItems.map((item) => (
                              <div className="font-medium text-gray-800">
                                {item.name}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{order.transactionId}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            {order.createdAt.substring(0, 10)}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{order.orderAmount}</div>
                        </td>
                        <td className="p-2 pl-4 whitespace-nowrap">
                          <div className="text-left">
                            {order.shippingAddress.city}
                          </div>
                        </td>
                        {order.isDelivered ? (
                          <td className="p-2 pl-4 whitespace-nowrap">
                            <div className="text-left">delivered</div>
                          </td>
                        ) : (
                          <td className="p-2 pl-4 whitespace-nowrap">
                            <div className="text-left">order placed</div>
                          </td>
                        )}
                        <td className="p-2 pl-4 whitespace-nowrap">
                          <Link
                            className="text-left"
                            to={`/orderinfo/${order._id}`}
                          >
                            view
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
