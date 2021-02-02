import React from "react";
import ViewBrandEvent from "../../components/BrandEvent/View/ViewBrandEvent";
import Mynavbar from "../../components/Navbar/Mynavbar";
import "./style.css";

const Dashboard = ({}) => {
  return (
    <main className="dashboard_container">
      <aside className="left_menu"></aside>

      <Mynavbar />
      <ViewBrandEvent />
    </main>
  );
};

export default Dashboard;
