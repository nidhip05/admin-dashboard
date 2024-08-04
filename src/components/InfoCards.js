import React from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { RiArrowRightSLine } from "react-icons/ri";
import { BiDish } from "react-icons/bi";

function InfoCards() {
  return (
    <div className="bg-gray-900 p-4 rounded-md grid gap-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-full h-16 w-16 flex justify-center items-center"
            style={{ backgroundColor: "rgba(249,114,22,0.2)" }}
          >
            <TbCurrentLocation className="text-2xl text-orange-600" />
          </div>
          <div>Goals</div>
        </div>
        <div className="bg-gray-600 rounded-full p-1">
          <RiArrowRightSLine className="text-lg" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-full h-16 w-16 flex justify-center items-center"
            style={{ backgroundColor: "rgba(0,122,255,0.2)" }}
          >
            <TbCurrentLocation className="text-2xl text-blue-600" />
          </div>
          <div>Popular Dishes</div>
        </div>
        <div className="bg-gray-600 rounded-full p-1">
          <RiArrowRightSLine className="text-lg" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-full h-16 w-16 flex justify-center items-center"
            style={{ backgroundColor: "#5ddbc530" }}
          >
            <BiDish className="text-2xl text-cyan-500" />
          </div>
          <div>Menus</div>
        </div>
        <div className="bg-gray-600 rounded-full p-1">
          <RiArrowRightSLine className="text-lg" />
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
