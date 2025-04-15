import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { resetState, setIsLoggedIn } from "./Redux/Slices/AuthSlice";
import Cookies from "js-cookie";
import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const isLoggedIn = useSelector((state) => state.auth.data.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAuthClick = () => {
    Cookies.remove("loginstatus");
    if (isLoggedIn) {
      Cookies.remove("token");
      Cookies.remove("user_role");
      dispatch(resetState());
      dispatch(setIsLoggedIn(false));
      navigate('/');
    } else {
      navigate("/login");
    }
  };
  const loginstatus = Cookies.get("loginstatus");

  return (
    <div className="nav">
      <nav
        id="navigationbar"
        className={` bg-white dark:bg-gray-900 text-black dark:text-white p-4 flex justify-between items-center shadow-lg shadow-gray-600 dark:shadow-gray-800 ${
          darkMode ? "shadow-md dark:shadow-gray-800" : "shadow-md shadow-gray-300"
        } border-b-2 border-gray-200 dark:border-gray-700
        /* Bottom Inner Shadow */
        bg-white dark:bg-gray-900 box-shadow: inset 0px -4px 6px -4px rgba(0, 0, 0, 0.2);`}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center">
              <span className="text-blue-600 text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
                🧠
              </span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
              PrepNGo
            </span>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-8">
          {["/", "/about", "/contact", "/privacy"].map((path, index) => {
            const label = ["Home", "About", "Contact", "Privacy"][index];
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold text-blue-500"
                    : "text-lg font-semibold text-black dark:text-white hover:text-blue-500"
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>

        {/* Auth + Theme Toggle Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl transition-all duration-300 hover:text-blue-400"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Login / Logout */}
          <button
            onClick={handleAuthClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {loginstatus ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
