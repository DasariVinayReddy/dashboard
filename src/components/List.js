// ListComponent.js
import React from "react";
import { FaArrowCircleRight, FaStar, FaUtensils, FaList } from "react-icons/fa";

const listItems = [
  { id: 1, icon: <FaStar className="text-yellow-500" />, name: "Goals" },
  {
    id: 2,
    icon: <FaUtensils className="text-green-500" />,
    name: "Popular Dishes",
  },
  { id: 3, icon: <FaList className="text-blue-500" />, name: "Menus" },
];

const ListComponent = () => {
  return (
    <div className=" flex-1 p-4 md:p-6 lg:p-8">
      <ul className="space-y-4">
        {listItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                {item.icon}
              </div>
              <span className="text-base md:text-lg font-medium">
                {item.name}
              </span>
            </div>
            <div className="flex items-center">
              <FaArrowCircleRight className="text-gray-500 text-xl md:text-2xl" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
