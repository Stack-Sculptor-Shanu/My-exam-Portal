import React from 'react';
import { Bell } from 'lucide-react';

export default function Nav() {
  return (
    <div className="w-full bg-white dark:bg-gray-800 px-6 py-4 flex justify-between items-center shadow-sm dark:shadow-md transition-colors">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Admin Dashboard
      </h2>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-700 dark:text-gray-200 cursor-pointer hover:text-blue-500 transition" />
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/005/005/791/small/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
          alt="Admin"
          className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
        />
      </div>
    </div>
  );
}
