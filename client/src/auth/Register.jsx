import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const RegisterPage = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [answer, setanswer] = useState("");


  const navigate = useNavigate();
  const toggleForm = () => {
    setShowSignUp(!showSignUp);
    navigate("/login");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name,email,password,phone,address,answer }
      );
      if(res && res.data.success){
        toast.success(res.data && res.data.message)
        setTimeout(() => {
          
          navigate("/login");
        }, 100);
      } 
      else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }

    // navigate("/login");
  };
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-10">
        <div className="relative w-full max-w-4xl h-[650px] shadow-xl rounded-lg overflow-hidden flex bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 items-center">
          

          {/* Sign-Up Section */}
          <div
            className={`absolute w-1/2 h-full flex items-center justify-center text-center transition-opacity duration-500 ease-in-out ${
              showSignUp ? "opacity-100" : "opacity-0"
            } ${showSignUp ? "z-20" : "z-0"}`}
          >
            {showSignUp && (
              <h1 className="text-5xl font-bold space-y-4">
                <span className="block text-purple-400 animate-fade-in delay-[0s]">
                  Join Us!
                  <span className="absolute inset-0 bg-gradient-to-l from-blue-100 to-purple-200 -z-10 transform translate-x-2 translate-y-2 blur-md"></span>
                </span>
              </h1>
            )}
          </div>

          {/* Sign Up Section */}
          <div
            className={`absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-200 to-purple-200 p-8 transition-transform duration-500 ease-in-out ${
              showSignUp ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="signup-name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="name"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  value={name}
                  id="signup-name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signup-email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
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
                <label htmlFor="signup-phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="phone"
                  placeholder="Enter your Phone"
                  value={phone}
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                  id="signup-phone"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signup-address" className="block text-gray-700">
                  Address
                </label>
                <input
                  type="address"
                  placeholder="Enter your Address"
                  value={address}
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                  id="signup-address"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signup-address" className="block text-gray-700">
                  What is your Nickname?
                </label>
                <input
                  type="answer"
                  placeholder="Enter your Nickname"
                  value={answer}
                  onChange={(e) => {
                    setanswer(e.target.value);
                  }}
                  id="signup-answer"
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
                  placeholder="Enter your Password"
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
                onSubmit={() => {
                  navigate("/login");
                }}
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-purple-500 hover:underline"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
