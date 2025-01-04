import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

const ForgotPassword = () => {
  const [newPassword, setnewPassword] = useState("");
  const [answer, setanswer] = useState("");
  const [email, setemail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, answer, newPassword }
      );
      if (res && res.data.success) {
        // console.log(res.data.token);
        toast.success(res.data && res.data.message);
        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token,
        // });
        // localStorage.setItem("auth", JSON.stringify(res.data));
        setTimeout(() => {
          navigate(location.state || "/login");
        }, 1);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Layout>
        <div className="max-w-md mx-auto mt-20 p-6 bg-gray-200 shadow-md rounded">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="signup-email"
                className="block text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                id="signup-email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* New Password Field */}
            <div className="mb-4">
              <label
                htmlFor="signup-password"
                className="block text-gray-700 mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
                id="signup-password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your new password"
                required
              />
            </div>
            {/* Nickname Field */}
            <div className="mb-6">
              <label
                htmlFor="signup-nickname"
                className="block text-gray-700 mb-2"
              >
                What is your Nickname?
              </label>
              <input
                type="text"
                placeholder="Enter your Nickname"
                value={answer}
                onChange={(e) => setanswer(e.target.value)}
                id="signup-nickname"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition-colors"
            >
                Reset Password
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ForgotPassword;
