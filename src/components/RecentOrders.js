import React from "react";

function RecentOrders() {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
      statusBgColor: "rgba(20,231,136,0.2)",
      statusColor: "#16a34a",
      img: "/user1.jpg",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48965786",
      amount: "$385.02",
      status: "Delivered",
      statusBgColor: "rgba(20,231,136,0.2)",
      statusColor: "#16a34a",
      img: "/user2.jpeg",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
      statusBgColor: "rgba(233,31,20,0.35)",
      statusColor: "#d13e36",
      img: "/user3.webp",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
      statusBgColor: "rgba(233,31,20,0.35)",
      statusColor: "#d13e36",
      img: "/user4.jpeg",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
      statusBgColor: "rgba(20,231,136,0.2)",
      statusColor: "#16a34a",
      img: "/user5.jpeg",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
      statusBgColor: "rgba(20,231,136,0.2)",
      statusColor: "#16a34a",
      img: "/user6.jpg",
    },
  ];

  return (
    <div className="bg-gray-900 md:p-4 rounded-md py-4 px-2">
      <div className="text-white font-semibold text-xl mb-4">Recent Orders</div>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead className="border border-gray-700 border-l-0 border-r-0 border-t-0">
            <tr>
              <th className="text-left pb-2 md:text-sm text-xs">Customer</th>
              <th className="text-left pb-2 md:text-sm text-xs">Order No.</th>
              <th className="text-left pb-2 md:text-sm text-xs">Amount</th>
              <th className="text-left pb-2 md:text-sm text-xs">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className={`${
                  index !== 5
                    ? "border border-gray-700 border-l-0 border-r-0 border-t-0"
                    : ""
                }`}
              >
                <td className="py-4 md:text-sm text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={order.img}
                      alt=""
                      className="md:h-12 md:w-12 h-8 w-8 rounded-full object-cover"
                    />
                    {order.customer}
                  </div>
                </td>
                <td className="py-4 md:text-sm text-xs">{order.orderNo}</td>
                <td className="py-4 md:text-sm text-xs">{order.amount}</td>
                <td className="py-4">
                  <div className="flex items-center justify-start">
                    <div
                      className="py-0.5 px-2.5 rounded-3xl md:text-xs text-xs"
                      style={{
                        backgroundColor: order.statusBgColor,
                        color: order.statusColor,
                      }}
                    >
                      {order.status}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
