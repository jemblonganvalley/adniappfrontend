import React from "react";

const Dashboard = ({ children }) => {
  return (
    <main className="dashboard_container">
      <aside className="left_menu"></aside>
      <section className="dashboard_content">{children}</section>
    </main>
  );
};

export default Dashboard;
