import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    <Dashboard />;
  });
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full max-w-screen">
        <Header />
        <div className="flex flex-1 h-screen">
          {/* Sidebar */}
          <Sidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/home" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
