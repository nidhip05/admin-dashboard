import React, { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { LuClipboardCheck } from "react-icons/lu";
import { MdOutlineInsertChart } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = "border-l-4 border-blue-500";
  const activeTab = "home";

  return (
    <div
      className={`w-16 lg:w-20 bg-gray-900 ${
        isOpen ? "block" : "hidden"
      } lg:block`}
    >
      <div className="flex items-center justify-center px-2 py-6">
        <BsFillGridFill className="text-blue-500 text-2xl" />
      </div>
      <nav className="space-y-10 pt-2">
        <div
          className={`flex items-center justify-center text-blue-500 hover:text-white ${
            activeTab === "home" ? activeClass : ""
          }`}
        >
          <FaHouse className="text-2xl" />
        </div>
        <div
          className={`flex items-center justify-center text-gray-300 hover:text-white`}
        >
          <MdOutlineInsertChart className="text-2xl" />
        </div>
        <div
          className={`flex items-center justify-center text-gray-300 hover:text-white`}
        >
          <LuClipboardCheck className="text-2xl" />
        </div>
        <div
          className={`flex items-center justify-center text-gray-300 hover:text-white`}
        >
          <IoBagCheckOutline className="text-2xl" />
        </div>
      </nav>
      <button
        className="lg:hidden text-gray-400 absolute bottom-4 right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu />
      </button>
    </div>
  );
}

export default Sidebar;
