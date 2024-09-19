import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";
import Home from "./components/pages/Home";
import DashboardRoutes from "./components/dashboard/teacher/Dashboardroutes";
import DashboardStudentRoutes from "./components/dashboard/student/DashboardStudentRoutes";

function App() {
  const location = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({ duration: 0 });
  }, [location.pathname]);

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard/*" element={<DashboardRoutes />} />
        <Route path="dashboardstudent/*" element={<DashboardStudentRoutes />} />

      </Routes>
    </div>
  );
}

export default App;
