import React from "react";

function StatsCard({ item, index }) {
  return (
    <div className="bg-gray-900 p-4 rounded-md text-start" index={index}>
      <div
        className="rounded-md p-2 w-12 h-12 mb-4 flex justify-center items-center"
        style={{ backgroundColor: item.bgColor }}
      >
        {item.icon}
      </div>
      <div className="text-white mb-3 text-sm">{item.title}</div>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-white">{item.value}</div>
        <div className="flex items-center">
          {item.dropdown}
          <div
            className="text-sm font-medium"
            style={{ color: item.percentColor }}
          >
            {item.percent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
