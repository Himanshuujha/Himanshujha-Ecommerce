import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTh, FaProductHunt, FaUser } from 'react-icons/fa'; // Import icons

const UserMenu = () => {
  return (
    <div className="w-70 h-[89vh] bg-gray-200 text-black top-0 left-0 p-4 shadow-lg">
      <h4 className="text-lg font-semibold p-4 border-b border-gray-300">Dashboard</h4>
      <ul className="mt-4">
        <li className="mb-2">
          <NavLink
            to="/dashboard/user/profile"
            className={({ isActive }) =>
              isActive ? "bg-gray-300 text-gray-900 flex items-center p-2 rounded-lg" : "flex items-center p-2 rounded-lg hover:bg-gray-300"
            }
          >
            <FaUser className="mr-2" /> Profile
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/dashboard/user/orders"
            className={({ isActive }) =>
              isActive ? "bg-gray-300 text-gray-900 flex items-center p-2 rounded-lg" : "flex items-center p-2 rounded-lg hover:bg-gray-300"
            }
          >
            <FaTh className="mr-2" /> Orders
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default UserMenu;
