import React, { useState, useEffect } from "react";
import { getAllProducts, deleteProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const getProducts = useSelector((state) => state.getAllProductsReducer);
  const { products } = getProducts;
  console.log(products);
  const [show, setShow] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  return (
    <div>
      <div>
        <div className="w-full sm:px-6">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Products
              </p>
              <div>
                <button
                  onClick={() => setIsModalVisible(true)}
                  className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center justify-center w-32 h-9 px-2 pt-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                >
                  <p className="text-sm font-medium leading-none text-white">
                    New Products
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-4">Product</th>
                  <th className="font-normal text-left pl-12">In stock</th>
                  <th className="font-normal text-left pl-12">Price</th>
                  <th className="font-normal text-left pl-20">Rating</th>
                  <th className="font-normal text-left pl-16">
                    Latest customers
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                {products &&
                  products.map((product) => (
                    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10">
                            <img
                              className="w-full h-full rounded"
                              src={product.image}
                            />
                          </div>
                          <div className="pl-4">
                            <p className="font-medium">{product.name}</p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              {product.category}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-12">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          72%
                        </p>
                        <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                          <div className="w-20 h-3 bg-green-progress rounded-full" />
                        </div>
                      </td>
                      <td className="pl-12">
                        <p className="font-medium">{product.price} Rs/-</p>
                        <p className="text-xs leading-3 text-gray-600 mt-2">
                          5% discount
                        </p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium">{product.rating}</p>
                        <p className="text-xs leading-3 text-gray-600 mt-2">
                          out of five
                        </p>
                      </td>

                      <td className="pl-16">
                        <div className="flex items-center">
                          <img
                            className="shadow-md w-8 h-8 rounded-full"
                            src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                          />
                          <img
                            className="shadow-md w-8 h-8 rounded-full -ml-2"
                            src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                          />
                          <img
                            className="shadow-md w-8 h-8 rounded-full -ml-2"
                            src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                          />
                          <img
                            className="shadow-md w-8 h-8 rounded-full -ml-2"
                            src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                          />
                        </div>
                      </td>
                      <td className="px-7 2xl:px-0">
                        {show == product.name ? (
                          <button
                            onClick={() => setShow(null)}
                            className="focus:outline-none pl-7"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        ) : (
                          <button
                            onClick={() => setShow(product.name)}
                            className="focus:outline-none pl-7"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        )}
                        {show == product.name && (
                          <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                            <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                              <button
                                onClick={() => {
                                  setUpdateModal(true);
                                }}
                              >
                                Edit
                              </button>
                              <EditProduct
                                productid={product._id}
                                setUpdateModal={setUpdateModal}
                                updateModal={updateModal}
                              />
                            </div>
                            <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                              <button
                                onClick={() => {
                                  dispatch(deleteProduct(product._id));
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                {/*  */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddProduct
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </div>
  );
};

export default Products;
