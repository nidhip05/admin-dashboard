import React from "react";
import { FiBell, FiMail, FiSearch, FiSettings } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-gray-900 gap-4">
      <div className="relative flex items-center w-full lg:w-1/5">
        <FiSearch className="absolute top-[9px] left-3 text-white" />
        <input
          type="text"
          className="bg-gray-700 text-white pl-9 pr-4 py-2 w-full rounded-md focus:outline-none text-sm shadow-xl"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative bg-gray-600 p-1.5 rounded-full">
          <FiMail className="text-gray-300 text-base" />
        </div>
        <div className="relative bg-gray-600 p-1.5 rounded-full">
          <FiSettings className="text-gray-300 text-base" />
        </div>
        <div className="relative bg-gray-600 p-1.5 rounded-full">
          <FiBell className="text-gray-300 text-base" />
          <div className="absolute top-[5px] right-[6px] w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
        <div className="relative md:pl-4 pl-0">
          {/* <img
            src="/dummyuser.jpeg"
            alt="User"
            className="w-8 h-8 rounded-full"
          /> */}
          <FaUserCircle className="text-3xl text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Header;
