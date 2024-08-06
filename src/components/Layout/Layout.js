import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
      <Route
        render={(props) => (
          <div>
            <Sidebar {...props} />
            <div className="p-4">
              <Routes />
            </div>
          </div>
        )}
      />
    </Router>
  );
};

export default Layout;
