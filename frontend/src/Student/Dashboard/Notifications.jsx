import { Bell } from 'lucide-react';
import React from 'react';

const Notifications = () => {
  const notice = [
    { message: "Your exam will start on 25" },
    { message: "HTML result will be published on 27" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-red-600">🔔 Notifications</h2>

      <div className="space-y-4">
        {notice.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-4 shadow-md rounded-lg border-l-4 border-red-500"
          >
            <Bell className="text-red-600" />
            <h3 className="text-md font-medium text-gray-800">{item.message}</h3>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Notifications;
