import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import BarChart from "./BarChart";

function ActivityChart() {
  return (
    <div className="bg-gray-900 p-4 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <div className="text-white text-xl font-semibold">Activity</div>
        <div className="rounded-2xl bg-gray-700 border border-gray-600 px-3 py-1 flex items-center gap-1">
          <p className="text-xs text-white">Weekly</p>
          <TiArrowSortedDown className="text-white text-base" />
        </div>
      </div>
      <div className="h-48 bg-gray-700 rounded-md">
        <BarChart />
      </div>
    </div>
  );
}

export default ActivityChart;
