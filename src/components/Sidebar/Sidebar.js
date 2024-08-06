import sidebar_items from "../../service/sidebar_routes.json";
import SidebarItem from "./SideBarItems";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  // State to manage whether the sidebar is expanded or collapsed
  const [expanded, setExpanded] = useState(true);

  const location = useLocation();

  const activeItem = sidebar_items.findIndex(
    (item) => item.route === location.pathname
  );
  // Toggle the sidebar expansion state
  const toggleSidebar = () => setExpanded((prev) => !prev);

  return (
    <aside className="min-h-screen">
      <nav
        className={`h-full flex flex-col bg-[#1F2029]  shadow-sm ${
          expanded ? "w-52" : "w-20"
        }`}
      >
        <div className="pb-2 flex justify-between items-center"></div>
        {sidebar_items.map((item, index) => (
          <Link to={item.route} key={index}>
            <SidebarItem
              title={item.display_name}
              toolkit={item.span}
              icon={item.icon}
              active={index === activeItem}
              expanded={expanded}
            />
          </Link>
        ))}

        <button
          onClick={toggleSidebar}
          className="p-1.5 mt-[250px] ml-[18px] rounded-lg text-white title"
        >
          {expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
          )}
        </button>
      </nav>
    </aside>
  );
}
