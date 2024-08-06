import React from "react";
import ListComponent from "../components/List";

import Feedback from "../components/Feedback";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/perosn4.jpg";

import {
  Wallet,
  ChartBar,
  ShoppingBag,
  ArrowLeftRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import BarChart from "../components/barchart";

export default function Dashboard() {
  const orders = [
    {
      Customer: "Besique Monroe",
      Orderno: "123478256",
      Amount: "$123.00",
      status: "Active",
      imgSrc: person1,
    },
    {
      Customer: "James Cavier",
      Orderno: "323478256",
      Amount: "$365.00",
      status: "Active",
      imgSrc: person2,
    },
    {
      Customer: "Elvis Son",
      Orderno: "624478256",
      Amount: "$45.00",
      status: "Suspended",
      imgSrc: person3,
    },
    {
      Customer: "Dana White",
      Orderno: "423458256",
      Amount: "$65.00",
      status: "Inactive",
      imgSrc: person4,
    },
    {
      Customer: "Elvis Son",
      Orderno: "353472256",
      Amount: "$545.00",
      status: "Suspended",
      imgSrc: person1,
    },
  ];

  const timeline = [
    {
      display_name: "Total Orders",
      span: "75",
      icon: ShoppingBag,
      arrow: ChevronUp,
      number: "3%",
    },
    {
      display_name: "Total Delivered",
      span: "70",
      icon: ChartBar,
      arrow: ChevronDown,
      number: "3%",
    },
    {
      display_name: "Total Cancelled",
      span: "05",
      icon: ShoppingBag,
      arrow: ChevronUp,
      number: "3%",
    },
    {
      display_name: "Total Revenue",
      span: "$12k",
      icon: ArrowLeftRight,
      arrow: ChevronDown,
      number: "3%",
    },
  ];

  return (
    <div className="">
      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto bg-black text-white">
        <h1 className="font-bold pb-3 text-xl">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-6">
          {/* Small Boxes */}
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg bg-[#1F2029] p-4 flex flex-col justify-between items-center h-auto md:h-[120px] md:w-[200px] lg:h-[150px] lg:w-[200px] sm:justify-center"
            >
              <div
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full ${
                  item.icon === ShoppingBag
                    ? "bg-blue-200"
                    : item.icon === ChartBar
                    ? "bg-green-200"
                    : item.icon === Wallet
                    ? "bg-orange-200"
                    : ""
                }`}
              >
                <item.icon
                  className={`h-5 w-5 md:h-6 md:w-6 text-white ${
                    item.icon === ShoppingBag
                      ? "text-blue-500"
                      : item.icon === ChartBar
                      ? "text-green-500"
                      : item.icon === Wallet
                      ? "text-orange-500"
                      : ""
                  }`}
                />
              </div>

              {/* Text and Span Section */}
              <div className="mt-2">
                <p className="text-white text-xs md:text-sm items-center">
                  {item.display_name}
                </p>
              </div>

              <div className="flex items-center md:justify-between lg:justify-between mt-2 w-full justify-center">
                <div className="text-xl md:text-2xl font-bold text-white items-center">
                  {item.span}
                </div>
                <div className="flex items-center space-x-1">
                  <item.arrow className="w-3 h-3 md:w-3 md:h-3 text-white " />
                  <span
                    className={`text-[10px] md:text-base ${
                      item.icon === ShoppingBag
                        ? "text-green-500"
                        : item.icon === ChartBar
                        ? "text-red-500"
                        : item.icon === ShoppingBag
                        ? "text-green-500"
                        : item.icon === ArrowLeftRight
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {item.number}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Box that fits content width */}

          <div className="bg-[#1F2029] rounded-lg dark:border-gray-600  md:h-[150px] col-span-1 lg:col-span-2 flex ">
            <div className="flex justify-between items-center p-6">
              {/* Left Side - Text */}
              <div className="flex flex-col justify-start">
                <p className="text-gray-700">NetProfit</p>
                <h2 className="text-2xl font-bold">$6725.25</h2>
                <div className="flex items-center">
                  <ChevronUp className="text-green-500 w-3 h-3 pt-1" />
                  <p className="ml-1 text-green-500 text-[12px] pt-1">%3</p>
                </div>
              </div>

              {/* Right Side - SVG */}
              <div className="flex items-center justify-end  relative w-24 h-24 scale-75  ml-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="transparent"
                    className="text-gray-700"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={283} // 2 * PI * r (10 * 45% * PI)
                    strokeDashoffset={(283 * (100 - 70)) / 100} // Adjust for 70% completion
                    className="text-blue-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xl font-bold">70%</span>
                  <span className="text-[8px]">Goal Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-6">
          {/* Box spanning 4 columns */}
          <div className="bg-[#1F2029] rounded-lg  dark:border-gray-600 h-[230px] lg:col-span-4">
            <BarChart />
          </div>

          {/* Box spanning 1 column */}
          <div className="bg-[#1F2029] rounded-lg dark:border-gray-600 h-64 lg:h-[230px] lg:col-span-2 flex items-center justify-center p-4">
            <ListComponent />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-6">
          {/* Box spanning 4 columns */}
          <div className="rounded-lg dark:border-gray-600 lg:col-span-4 bg-[#1F2029]">
            <div className="max-w-screen-lg">
              <div className="overflow-y-auto rounded-lg">
                <div className="text-xl font-bold p-4">Recent Orders</div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs font-semibold uppercase tracking-widest text-white">
                        <th className="px-5 py-3">Customer</th>
                        <th className="px-5 py-3">Orderno</th>
                        <th className="px-5 py-3">Amount</th>
                        <th className="px-5 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-500">
                      {orders.map((user) => (
                        <tr key={user.id}>
                          <td className="border-b px-5 py-5 text-sm">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-full w-full rounded-full"
                                  src={user.imgSrc}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="whitespace-no-wrap text-white">
                                  {user.Customer}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="border-b px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap text-white">
                              {user.Orderno}
                            </p>
                          </td>
                          <td className="border-b px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap text-white">
                              {user.Orderno}
                            </p>
                          </td>
                          <td className="border-b px-5 py-5 text-sm">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                user.status === "Active"
                                  ? "bg-green-200 text-green-900"
                                  : user.status === "Suspended"
                                  ? "bg-yellow-200 text-yellow-900"
                                  : "bg-red-200 text-red-900"
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Box spanning 2 columns */}
          <div className="bg-[#1F2029] rounded-lg dark:border-gray-600 lg:col-span-2 flex  p-4">
            <span className="text-gray-500">
              <Feedback />
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
