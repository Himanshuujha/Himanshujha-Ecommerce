import React from "react";
import Layout from "../../components/layout/Layout";
import { NavLink } from "react-router-dom";
import AdminMenu from "../../components/layout/AdminMenu";

const AdminDashboard = () => {
  const handleLogout = () => {};
  return (
    <>
      <Layout>
        <div className="grid grid-cols-12 bottom-0">
          <div className="col-span-3">
            <AdminMenu/>
          </div>
          <div className="col-span-9">content</div>
        </div>
        
      </Layout>
    </>
  );
};

export default AdminDashboard;
