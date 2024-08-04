import React from "react";
import { MdArrowDropUp } from "react-icons/md";
import RadialChart from "./RadialChart";

function NetProfitCard({ value }) {
  return (
    <div className="bg-gray-900 rounded-md grid grid-cols-2 gap-5">
      <div className="p-4">
        <div className="text-white mb-6 text-sm">Net Profit</div>
        <div className="text-4xl font-bold text-white">{value}</div>
        <div className="flex items-center mt-5">
          <MdArrowDropUp className="text-xl" style={{ color: "#22c55e" }} />
          <p className="text-xs font-medium text-green-500">3%</p>
        </div>
      </div>
      <div className="self-center justify-self-end">
        <RadialChart />
      </div>
    </div>
  );
}

export default NetProfitCard;
