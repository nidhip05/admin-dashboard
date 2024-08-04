import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import NetProfitCard from "./components/NetProfitCard";
import ActivityChart from "./components/ActivityChart";
import InfoCards from "./components/InfoCards";
import RecentOrders from "./components/RecentOrders";
import CustomerFeedback from "./components/CustomerFeedback";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { BsBagXFill } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

function App() {
  const stats = [
    {
      title: "Total Orders",
      value: "75",
      bgColor: "rgba(0,122,255,0.2)",
      icon: <FaCartArrowDown className="text-blue-600 text-xl" />,
      percent: "3%",
      percentColor: "#22c55e",
      dropdown: (
        <MdArrowDropUp className="text-xl" style={{ color: "#22c55e" }} />
      ),
    },
    {
      title: "Total Delivered",
      value: "70",
      bgColor: "rgba(20,231,136,0.2)",
      icon: <IoBagCheckSharp className="text-green-600 text-xl" />,
      percent: "3%",
      percentColor: "#f97316",
      dropdown: (
        <MdArrowDropDown className="text-xl" style={{ color: "#f97316" }} />
      ),
    },
    {
      title: "Total Cancelled",
      value: "05",
      bgColor: "rgba(249,114,22,0.2)",
      icon: <BsBagXFill className="text-orange-600 text-xl" />,
      percent: "3%",
      percentColor: "#22c55e",
      dropdown: (
        <MdArrowDropUp className="text-xl" style={{ color: "#22c55e" }} />
      ),
    },
    {
      title: "Total Revenue",
      value: "$12k",
      bgColor: "rgba(255,19,237,0.22)",
      icon: <FiDollarSign className="text-pink-600 text-xl" />,
      percent: "3%",
      percentColor: "#f97316",
      dropdown: (
        <MdArrowDropDown className="text-xl" style={{ color: "#f97316" }} />
      ),
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <h5 className="font-semibold text-2xl px-6 pt-6 pb-3">Dashboard</h5>
        <div className="p-4 grid grid-cols-1 lg:grid-cols-[1fr,0.7fr] gap-7">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {stats.map((item, index) => {
              return <StatsCard item={item} key={index} />;
            })}
          </div>
          <NetProfitCard value="$6759.25" />
          <ActivityChart />
          <InfoCards />
          <RecentOrders />
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
}

export default App;
