import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/actions/productActions";

const Filter = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");
  const [category, setCategory] = useState("all");
  return (
    <div className="flex items-center justify-center my-16 gap-14">
      <div className="xl:w-96">
        <div className="input-group items-stretch w-full">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center">
        <div className="xl:w-96">
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
            className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="popular">Popular</option>
            <option value="htl">High to low</option>
            <option value="lth">Low to hign</option>
          </select>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center">
        <div className="xl:w-96">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="all">All</option>
            <option value="non veg">Non veg</option>
            <option value="veg">Veg</option>
            <option value="icecreams">Ice creams</option>
            <option value="sweets">Sweets</option>
          </select>
        </div>
      </div>
      {/*  */}
      <button
        onClick={() => dispatch(filterProducts(search, sort, category))}
        className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        Filter
      </button>
    </div>
  );
};

export default Filter;
