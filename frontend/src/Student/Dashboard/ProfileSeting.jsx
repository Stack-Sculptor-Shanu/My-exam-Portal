
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProfileSetting = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const CORRECT_PASSWORD = "student123"; // Mock password

  const handleNameSubmit = (e) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      // Simulate success
      setMessage(`✅ updated successfully to "${name}"`);
      setName('');
      setPassword('');
      setActiveForm(null);
      toast.success(` ✅ updated successfully to "${name}`,{ position: "top-right" })
    } else {
      setMessage('❌ Incorrect password. Please try again.');
      toast.error(`❌ Incorrect password. Please try again.`,{ position: "top-right" });
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-1/3 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6 text-blue-700">Settings Menu</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => {
                setActiveForm('name');
                setMessage('');
              }}
              className="w-full text-left px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200"
            >
              Update Name
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveForm('Email');
                setMessage('');
              }}
              className="w-full text-left px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200"
            >
              Update Email
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveForm('Passward');
                setMessage('');
              }}
              className="w-full text-left px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200"
            >
              Update Passward
            </button>
          </li>
        </ul>
      </div>

      {/* Form Area */}
      <div className="w-2/3 p-10">
        {message && <p className="mb-4 text-sm">{message}</p>}

        {activeForm === 'name' && (
          <form className="space-y-4" onSubmit={handleNameSubmit}>
            <h3 className="text-lg font-semibold text-gray-800">Change Name</h3>
            <input
              type="text"
              placeholder="New name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Enter password to confirm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </form>
        )}
        {activeForm === 'Email' && (
          <form className="space-y-4" onSubmit={handleNameSubmit}>
            <h3 className="text-lg font-semibold text-gray-800">Change Email</h3>
            <input
              type="text"
              placeholder="New Email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Enter password to confirm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </form>
        )}
        {activeForm === 'Passward' && (
          <form className="space-y-4" onSubmit={handleNameSubmit}>
            <h3 className="text-lg font-semibold text-gray-800">Change Password</h3>
            <input
              type="text"
              placeholder="New Email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Enter password to confirm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileSetting;
