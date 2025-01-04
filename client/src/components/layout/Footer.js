import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex justify-evenly justify-center bg-gray-800 text-white py-8 font-sans">
      <div className="flex flex-col container mx-auto px-4">
        {/* Upper Footer */}
        <div className=" flex justify-evenly  s:grid-col-1 md:grid-cols-3 grid-cols-3 gap-9">
          {/* Column 1 */}
          <div className=" justify-center">
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul className="flex flex-col">
              <li className="mb-2 hover:text-gray-300 ">
                <p><NavLink to="/about">About Us</NavLink></p>
              </li>
              <li className="mb-2 hover:text-gray-300 ">
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li className="mb-2 hover:text-gray-300 ">
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <ul>
              <li className="mb-2 hover:text-gray-300">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="mb-2 hover:text-gray-300">
                <NavLink to="/policy">Privacy Policy</NavLink>
              </li>
              <li className="mb-2 hover:text-gray-300">
                <NavLink to="/terms">Terms & Conditions</NavLink>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>1234 Main St, Suite 100</p>
            <p>City, State, 12345</p>
            <p className="mt-4">Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                {/* Facebook Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.29h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.416h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                {/* Twitter Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.15 12.15 0 013 4.8a4.28 4.28 0 001.33 5.73 4.26 4.26 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.98A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0024 5.59a8.5 8.5 0 01-2.54.7z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                {/* Instagram Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5C19.075 2 22 4.925 22 8.25v7.5C22 19.075 19.075 22 15.25 22h-8.5C4.925 22 2 19.075 2 15.75v-7.5C2 4.925 4.925 2 7.75 2zm0-2C4.1799998 0 2 2.1799998 2 5.75v7.5C2 17.82 4.1799998 20 7.75 20h8.5C19.82 20 22 17.82 22 15.25v-7.5C22 2.1799998 19.82 0 15.25 0h-8.5zm12.5 5.5a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                {/* LinkedIn Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.024-3.063-1.869-3.063-1.869 0-2.156 1.46-2.156 2.967v5.699h-3v-10h2.883v1.367h.041c.401-.761 1.379-1.562 2.839-1.562 3.038 0 3.6 2.0 3.6 4.6v5.596z" />
                </svg>
              </a>
            </div>
          </div>

        {/* Lower Footer */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 LIVECART. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
