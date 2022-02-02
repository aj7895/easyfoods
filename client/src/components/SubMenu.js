import React from "react";
import { catData } from "../constant/data.js";

const SubMenu = () => {
  return (
    <div className="flex gap-7 items-center justify-center my-14">
      {catData &&
        catData.map((data) => (
          <div className="w-[290px] h-[250px] rounded-xl shadow transform hover:scale-105 transition duration-300 overflow-hidden">
            <img
              className="h-[80%] w-full object-cover"
              src={data.img}
              alt=""
            />
            <div className="text-center mx-auto text-xl text-gray-700 pt-[0.7rem] font-medium">
              <p>{data.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SubMenu;
