import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function UserManagement() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [userList, setUserList] = useState([
    { name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' },
    { name: 'Mark Smith', email: 'mark@example.com', status: 'Inactive' },
    { name: 'Emma Davis', email: 'emma@example.com', status: 'Active' },
    { name: 'Liam White', email: 'liam@example.com', status: 'Active' }
  ]);

  const newRegistrations = [
    { name: 'Nina Brooks', email: 'nina@example.com', registered: '2025-04-01' },
    { name: 'Jake Perry', email: 'jake@example.com', registered: '2025-04-03' },
    { name: 'Sophia Gray', email: 'sophia@example.com', registered: '2025-04-04' }
  ];

  const stats = [
    { label: 'Total Users', value: userList.length },
    { label: 'Active Users', value: userList.filter(u => u.status === 'Active').length },
    { label: 'Inactive Users', value: userList.filter(u => u.status === 'Inactive').length },
    { label: 'New Registrations (This Month)', value: newRegistrations.length }
  ];

  const handleDelete = (index) => {
    const updated = [...userList];
    updated.splice(index, 1);
    setUserList(updated);
  };

  const filteredUsers =
    selectedCard === 'Total Users'
      ? userList
      : selectedCard === 'Active Users'
      ? userList.filter((user) => user.status === 'Active')
      : selectedCard === 'Inactive Users'
      ? userList.filter((user) => user.status === 'Inactive')
      : [];

  return (
    <div className="p-6 space-y-6 overflow-auto scrollbar-none">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
              selectedCard === stat.label ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedCard(stat.label)}
          >
            <h3 className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* User Tables */}
      {(selectedCard === 'Total Users' || selectedCard === 'Active Users' || selectedCard === 'Inactive Users') && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">{selectedCard}</h3>
          <table className="w-full table-auto border text-left">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border dark:border-gray-600">Name</th>
                <th className="px-4 py-2 border dark:border-gray-600">Email</th>
                <th className="px-4 py-2 border text-center dark:border-gray-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, idx) => {
                const userIndex = userList.findIndex((u) => u.email === user.email);
                return (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-2 border dark:border-gray-600">{user.name}</td>
                    <td className="px-4 py-2 border dark:border-gray-600">{user.email}</td>
                    <td className="px-4 py-2 border text-center dark:border-gray-600">
                      <button
                        onClick={() => handleDelete(userIndex)}
                        className="text-red-500 hover:text-red-700"
                        title="Delete User"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* New Registrations Table */}
      {selectedCard === 'New Registrations (This Month)' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">New Registrations</h3>
          <table className="w-full table-auto border text-left">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border dark:border-gray-600">Name</th>
                <th className="px-4 py-2 border dark:border-gray-600">Email</th>
                <th className="px-4 py-2 border dark:border-gray-600">Registered Date</th>
              </tr>
            </thead>
            <tbody>
              {newRegistrations.map((user, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-600">{user.name}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{user.email}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{user.registered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
