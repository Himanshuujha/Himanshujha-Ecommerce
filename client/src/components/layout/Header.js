import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    setTimeout(() => {
      navigate("/login");
    }, 1);
    toast.success("Logout successfull");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 text-black font-serif uppercase text-black shadow-[0_8px_6px_-6px_rgba(0,0,0,0.8)] mb-1">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-roboto font-bold text-black tracking-wide">
            <Link to="/">🛒 LIVECART</Link>
          </div>

          {/* Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Links for Desktop */}
          <div className="flex justify-center items-center hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "hover:text-gray-800 hover:border-b-2 border-black pb-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "hover:text-gray-800 hover:border-b-2 border-black pb-1"
              }
            >
              Category
            </NavLink>
            {!auth.user ? (
              <>
                <div className="flex items-center justify-center bg-red-400 h-9 w-24 hover:bg-orange-400">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? "text-gray-400" : "hover:text-gray-800"
                    }
                  >
                    Register
                  </NavLink>
                </div>
                <div className="flex items-center justify-center bg-red-400 h-9 w-20 hover:bg-orange-400">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-gray-400" : "hover:text-gray-800"
                    }
                  >
                    Login
                  </NavLink>
                </div>
              </>
            ) : (
              <>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      {auth?.user?.name}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role===1?"admin" :"user"
                          }`}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          DashBoard
                        </NavLink>
                      </MenuItem>
                      <MenuItem>
                        <NavLink
                          className="block px-4 py-2 hover:bg-gray-700"
                          onClick={handleLogout}
                        >
                          Logout
                        </NavLink>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </>
            )}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "hover:text-gray-800 hover:border-b-2 border-black pb-1"
              }
            >
              Cart (0)
            </NavLink>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isOpen && (
          <div className="md:hidden">
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            {!auth.user ? (
              <>
                <NavLink
                  to="/register"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={toggleMenu}
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
              </>
            ) : (
              <>
               <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      {auth?.user?.name}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role===1?"admin" :"user"
                          }`}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          DashBoard
                        </NavLink>
                      </MenuItem>
                      <MenuItem>
                        <NavLink
                          className="block px-4 py-2 hover:bg-gray-700"
                          onClick={handleLogout}
                        >
                          Logout
                        </NavLink>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </>
            )}
            <NavLink
              to="/cart"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Cart (0)
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
