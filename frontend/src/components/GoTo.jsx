import React from "react";
import { useNavigate } from "react-router-dom";
import { RiAccountPinBoxLine } from "react-icons/ri";
import Cookies from "js-cookie";

const GoTo = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    const role = Cookies.get("user_role");
    if (role === "admin") {
      navigate("/aDashboard");
    } else if (role === "user") {
      navigate("/studentDashboard");
    } else {
      console.log("No role found. User might not be logged in.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={navigateToDashboard}
        className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-red-500 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-xl hover:bg-blue-700 group-hover:opacity-100 opacity-90 animate-bounce hover:animate-none"
      >
        <RiAccountPinBoxLine className="text-2xl" />
      </button>
      <div className="absolute bottom-16 right-0 hidden group-hover:block bg-black text-white text-xs p-2 rounded-md">
        Go to Dashboard
      </div>
    </div>
  );
};

export default GoTo;
