import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTh, FaProductHunt, FaUser } from 'react-icons/fa'; // Import icons

const AdminMenu = () => {
  return (
    <div className="w-70 h-[89vh] bg-gray-200 text-black top-0 left-0 p-4 shadow-lg">
      <h4 className="text-lg font-semibold p-4 border-b border-gray-300">Admin Dashboard</h4>
      <ul className="mt-4">
        <li className="mb-2">
          <NavLink
            to="/dashboard/admin/create-category"
            className={({ isActive }) =>
              isActive ? "bg-gray-300 text-gray-900 flex items-center p-2 rounded-lg" : "flex items-center p-2 rounded-lg hover:bg-gray-300"
            }
          >
            <FaTh className="mr-2" /> Create Category
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/dashboard/admin/create-products"
            className={({ isActive }) =>
              isActive ? "bg-gray-300 text-gray-900 flex items-center p-2 rounded-lg" : "flex items-center p-2 rounded-lg hover:bg-gray-300"
            }
          >
            <FaProductHunt className="mr-2" /> Create Products
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/dashboard/admin/users"
            className={({ isActive }) =>
              isActive ? "bg-gray-300 text-gray-900 flex items-center p-2 rounded-lg" : "flex items-center p-2 rounded-lg hover:bg-gray-300"
            }
          >
            <FaUser className="mr-2" /> Users
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default AdminMenu;
