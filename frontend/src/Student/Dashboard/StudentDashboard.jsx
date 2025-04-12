import React, { useState } from "react";
import { FaRegFileAlt, FaSignOutAlt } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
// import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import MyExam from "./MyExam";
import ProfileSetting from "./ProfileSeting";
import { Bell, LucideNotepadText } from "lucide-react";
import Result from "./Result";
import Home from "./Home";
import { FaBookBookmark } from "react-icons/fa6";
import Resources from "./Resources";
import Notifications from "./Notifications";

const StudentDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Profile />);
  const [selectedMenu, setSelectedMenu] = useState("Profile");
  const profilePicUrl = 'https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg';

  const menuItems = [
    { id: "Home", icon: <MdDashboard size={24} />, label: "Home", component: <Home /> },
    { id: "MyExam", icon: <FcManager size={24} />, label: "My Exams", component: <MyExam /> },
    { id: "Result", icon: <LucideNotepadText size={24} />, label: "Result", component: <Result /> },
    { id: "Resources", icon: <FaBookBookmark size={24} />, label: "Resources", component: <Resources /> },
    { id: "Notifications", icon: <Bell size={24} />, label: "Notification", component: <Notifications /> },
    { id: "ProfileSetting", icon: <FaRegFileAlt size={24} />, label: "Profile Setting", component: <ProfileSetting /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-200 text-black flex flex-col py-6 space-y-4 min-h-screen border-r border-black">
        <h2 className="text-xl font-bold text-center">Dashboard</h2>
        <nav className="flex flex-col space-y-2 mt-[50px] items-center">
  {menuItems.map((item) => (
    <button
      key={item.id}
      className={`flex items-center space-x-5 px-4 py-5 rounded-md transition w-48 justify-start
        ${
          selectedMenu === item.id
            ? "bg-gray-700 text-white"
            : "bg-transparent text-black hover:bg-gray-300"
        }`}
      onClick={() => {
        setSelectedComponent(item.component);
        setSelectedMenu(item.id);
      }}
    >
      {item.icon}
      <span className="text-lg">{item.label}</span>
    </button>
  ))}
</nav>



      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden ">
        {/* Top Navbar */}
        <nav className="flex justify-between items-center bg-gray-200 text-black p-4 shadow-md border-b border-black">
          <div className="text-xl font-bold">👤 Biswajit Sahu</div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Bell
                className="w-6 h-6 cursor-pointer hover:text-gray-500"
                onClick={() => {
                  setSelectedComponent(<Notifications />);
                  setSelectedMenu("Notification");
                }}
              />
              {/* Notification Badge */}
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </div>

            <img
              src={profilePicUrl}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:ring-2 hover:ring-blue-400"
              onClick={() => {
                setSelectedComponent(<Profile />);
                setSelectedMenu("Profile");
              }}
            />
          </div>
        </nav>

        {/* Rendered Component */}
        <div className="flex-1 overflow-auto  bg-gray-50">
          {selectedComponent}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
