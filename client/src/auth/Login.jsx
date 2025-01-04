import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../context/auth";

const LoginPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [auth, setAuth] = useAuth();


  const navigate = useNavigate();
  const toggleForm = () => {
    setShowSignUp(!showSignUp);
    navigate("/register");
  };
  const Handleforgetpass = () => {
    navigate('/forgot-password')
  };
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        console.log(res.data.token);
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        setTimeout(() => {
          navigate(location.state || "/");
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
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-16">
        <div className="relative w-full max-w-4xl h-[600px] shadow-xl rounded-lg overflow-hidden flex bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 items-center">
          {/* Stylish Text Section for Login */}
          <div
            className={`absolute right-0 h-full w-1/2 flex items-center justify-center text-center transition-opacity duration-500 ease-in-out ${
              showSignUp ? "opacity-0" : "opacity-100"
            } ${showSignUp ? "z-0" : "z-20"}`}
          >
            {!showSignUp && (
              <h1 className="text-5xl font-bold">
                <span className="block text-blue-500">
                  Welcome
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-200 -z-10 transform translate-x-2 translate-y-2 blur-md"></span>
                </span>
                <br />
                <span className="block text-purple-500">
                  Back!
                  <span className="absolute inset-0 bg-gradient-to-l from-purple-200 to-blue-100 -z-10 transform -translate-x-2 -translate-y-2 blur-md"></span>
                </span>
              </h1>
            )}
          </div>

          {/* Login Section */}
          <div
            className={`absolute bottom-0 top-0 left-0 w-1/2 bg-gradient-to-r from-blue-200 to-purple-200 p-8 transition-transform duration-500 ease-in-out ${
              showSignUp ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="signup-email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  id="signup-email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="signup-password"
                  className="block text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  id="signup-password"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
                onClick={handleSubmit}
              >
                Log In
              </button>
            </form>
            <p className="mt-4 text-center">
              Forgot Password?{" "}
              <button
                onClick={Handleforgetpass}
                className="text-purple-500 hover:underline"
              >
                Reset Password
              </button>
            </p>
           
              
            
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-purple-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
