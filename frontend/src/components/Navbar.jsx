import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import{useSelector,useDispatch} from 'react-redux'
import { resetState, setIsLoggedIn } from "./Redux/Slices/AuthSlice";
import Cookies from "js-cookie";

const Navbar = () => {
  const isLoggedIn = useSelector((state)=>state.auth.data.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleAuthClick = ()=>{
    if(isLoggedIn){
      Cookies.remove("token")
      Cookies.remove("user_role")
      dispatch(resetState())
      dispatch(setIsLoggedIn(false))
      navigate('/')
    }else{
      navigate("/login")
    }
  }
  // const token = Cookies.get("token");
  // console.log(token)

  // const handleLogout = () => {
  //   Cookies.remove("token");
  //   navigate("/login");
  // };

  return (
    <div>
      <nav id="navigationbar" className="bg-white text-black p-4 flex justify-between items-center shadow-md shadow-gray-300">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white rounded-full flex justify-center items-center">
              <span className="text-blue-600 text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
                🧠
              </span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
              PrepNGo
            </span>
          </Link>
        </div>

        {/* Navbar Sections: Home, About, Contact, Privacy */}
        <div className="flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-lg font-semibold text-blue-500" : "text-lg font-semibold text-black hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-lg font-semibold text-blue-500" : "text-lg font-semibold text-black hover:text-blue-500"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-lg font-semibold text-blue-500" : "text-lg font-semibold text-black hover:text-blue-500"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              isActive ? "text-lg font-semibold text-blue-500" : "text-lg font-semibold text-black hover:text-blue-500"
            }
          >
            Privacy
          </NavLink>
        </div>

        {/* Login/Logout Button */}
        {/* <div className="relative">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
          )}
        </div> */}
        <button
        onClick={handleAuthClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      </nav>
    </div>
  );
};

export default Navbar;
