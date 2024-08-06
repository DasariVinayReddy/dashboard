import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Home, Wallet, ChartBar, ShoppingBag, Clipboard } from "lucide-react";

const iconComponents = {
  Home,
  ChartBar,
  Wallet,
  ShoppingBag,
  Clipboard,
};

function SidebarItem({ icon, title, active, expanded }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const IconComponent = iconComponents[icon];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#1F2029]">
      {/* Mobile menu button */}
      <div className="md:hidden">
        {/* <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
        </button> */}
      </div>

      {/* Sidebar content */}
      <div className="">
        <li
          className={`
            relative flex items-center py-2 px-3 sm:px-4 md:px-6
            mt-4 sm:mt-6 md:mt-8 font-medium rounded-md cursor-pointer
            transition-colors group
            ${active ? "bg-gradient-to-tr text-indigo-600" : "text-gray-300"}
          `}
        >
          <span className="flex-shrink-0">
            {IconComponent && <IconComponent size={20} />}
          </span>
          <span
            className={`
              ml-3 text-sm sm:text-base
              ${expanded ? "visible" : "hidden sm:hidden md:hidden"}
              ${
                active
                  ? "text-indigo-600"
                  : "text-gray-300 group-hover:text-white"
              }
            `}
          >
            {title}
          </span>
        </li>
      </div>
    </div>
  );
}

export default SidebarItem;
