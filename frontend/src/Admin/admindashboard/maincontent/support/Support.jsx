import React, { useState } from 'react';

export default function Support() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    query: ''
  });

  const adminSupport = {
    label: 'Admin Contact Support Panel',
    // description: 'Reach out to the admin team for technical or account-related support.',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add submission logic here (e.g., send to backend)
    alert(`Query submitted by ${formData.email}`);
    setFormData({ email: '', query: '' });
    setShowForm(false);
  };

  return (
    <div className="flex   px-4 mt-5">
      <div className="w-full">
        <div className="bg-white flex dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {adminSupport.label}
          </h3>
          {/* <p className="text-gray-600 dark:text-gray-300 text-sm">{adminSupport.description}</p> */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="ml-auto px-4 py-2 border-2 text-white border-blue-600 bg-blue-600 dark:text-white rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
          >
            Click here
        </button>
      </div>


        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors space-y-4"
          >
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                Query
              </label>
              <textarea
                name="query"
                rows="4"
                required
                value={formData.query}
                onChange={handleChange}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
