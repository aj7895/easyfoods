import React, { useState } from "react";
import { Modal } from "antd";
import { addProduct } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

const AddProduct = ({ setIsModalVisible, isModalVisible }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    category: "",
    countInStock: "",
    price: "",
    image: "",
    desc: "",
    discount: "",
  });

  console.log(values);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(addProduct(values));
    setIsModalVisible(false);
  };
  return (
    <div>
      <>
        <Modal
          title="Add"
          visible={isModalVisible}
          hidden={true}
          width={690}
          okButtonProps={{ hidden: true }}
          cancelButtonProps={{ hidden: true }}
          closeButtonProps={{ hidden: true }}
        >
          <div>
            <div className="w-full bg-white p-10">
              <p
                role="contentinfo"
                className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
              >
                Fill in the data for adding product. It will take a couple of
                minutes.
              </p>
              <div className="mt-8 md:flex items-center">
                <div className="flex flex-col">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Dish name
                  </label>
                  <input
                    onChange={handleInputs}
                    name="name"
                    value={values.name}
                    type="text"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                    placeholder="Rice"
                  />
                </div>
                <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Image
                  </label>
                  <input
                    onChange={handleInputs}
                    name="image"
                    value={values.image}
                    type="text"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                    placeholder="Image url"
                  />
                </div>
              </div>
              <div className="mt-12 md:flex items-center">
                <div className="flex flex-col">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Price
                  </label>
                  <input
                    onChange={handleInputs}
                    name="price"
                    value={values.price}
                    type="text"
                    placeholder="500 Rs/-"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
                <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Category
                  </label>
                  <input
                    onChange={handleInputs}
                    name="category"
                    value={values.category}
                    type="text"
                    placeholder="veg / non-veg"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
              </div>
              <div className="mt-12 md:flex items-center">
                <div className="flex flex-col">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Description
                  </label>
                  <input
                    onChange={handleInputs}
                    name="desc"
                    value={values.desc}
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet..."
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
                <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Count in stock
                  </label>
                  <input
                    onChange={handleInputs}
                    name="countInStock"
                    value={values.countInStock}
                    type="text"
                    placeholder="100"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
              </div>
              {/*  */}
              <div className="mt-12 md:flex items-center">
                <div className="flex flex-col md:mt-0 mt-8">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Discount
                  </label>
                  <input
                    onChange={handleInputs}
                    name="discount"
                    value={values.discount}
                    type="text"
                    placeholder="10%"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
              </div>

              {/*  */}
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <span className="text-sm font-medium text-center text-gray-800 capitalize">
                  Insert a new item
                </span>
                <svg
                  className="mt-1 ml-3"
                  width={12}
                  height={8}
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                </svg>
              </button>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default AddProduct;
