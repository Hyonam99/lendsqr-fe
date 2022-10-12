import React from "react";
import "./style.css";
import Dashboard_header from "./Dashboard_header";
import Dashboard_sidebar from "./Dashboard_sidebar";
import Dashboard_analytics from './Dashboard_analytics'

function Dashboard() {
  return (
    <section className="User-dashboard">
      <section className="Dash-header">
        <Dashboard_header />
      </section>
      <section className="Dash-sidebar">
        <Dashboard_sidebar />
      </section>
      <section className="Dash-analytics">
        <h2>Users</h2>
        <Dashboard_analytics />
       </section>
    </section>
  );
}

export default Dashboard;
