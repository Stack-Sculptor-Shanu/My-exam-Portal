import React from "react";
import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
import { RiAccountPinBoxLine } from "react-icons/ri";
import Cookies from "js-cookie";

const GoTo = () => {
  const navigate = useNavigate();

  // Function to handle the button click and navigate based on role
  const navigateToDashboard = () => {
    const role = Cookies.get("user_role"); // Assuming the role is stored in the cookie as 'user_role'

    // Redirect based on user role
    if (role === "admin") {
      navigate("/aDashboard");
    } else if (role === "student") {
      navigate("/studentDashboard");
    } else {
      console.log("No role found. User might not be logged in.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Button with Icon */}
      <button
        onClick={navigateToDashboard}
        className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-red-500 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-xl hover:bg-blue-700 group-hover:opacity-100 opacity-90 animate-bounce hover:animate-none"
      >
        <RiAccountPinBoxLine className="text-2xl" />
      </button>

      {/* Tooltip on Hover */}
      <div className="absolute bottom-16 right-0 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md">
        Go to Dashboard
      </div>
    </div>
  );
};

export default GoTo;
