import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Options from "./Designation/Options";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../Utilities/axiosInstance";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/login", formData, {
        withCredentials: true,
      });
      const { token, role } = response.data;
      Cookies.set("loginstatus", true, { expires: 7 });
      Cookies.set("user_role", role, { expires: 7 });

      toast.success("Logged in successfully!", { position: "top-right" });

      if (role === "user") {
        navigate("/studentDashboard", { replace: true });
      } else if (role === "admin") {
        navigate("/aDashboard", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError("Invalid Login Credentials");
      toast.error("Invalid login credentials. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-[91vh] bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="bg-white bg-opacity-40 dark:bg-gray-800 dark:bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Login Here
        </h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-bold">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-200 font-bold">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 mt-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <button
            type="submit"
            disabled={!formData.email.trim() || !formData.password.trim()}
            className={`w-full font-bold text-white py-2 mt-6 rounded-md transition duration-200 ${
              formData.email && formData.password
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Don't have an account?
          <span
            onClick={() => setShowOptions(true)}
            className="text-blue-500 font-semibold cursor-pointer hover:underline ml-1"
          >
            Register
          </span>
        </p>
      </div>

      {showOptions && <Options onClose={() => setShowOptions(false)} />}
      <ToastContainer />
    </div>
  );
};

export default Login;
