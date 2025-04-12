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
    Cookies.remove("loginstatus")
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
  const loginstatus=Cookies.get("loginstatus")
  return (
    <div>
      <nav id="navigationbar" className="bg-white text-black p-4 flex justify-between items-center shadow-md shadow-gray-300">
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
        <button
        onClick={handleAuthClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {loginstatus ? "Logout" : "Login"}
      </button>
      </nav>
    </div>
  );
};

export default Navbar;
