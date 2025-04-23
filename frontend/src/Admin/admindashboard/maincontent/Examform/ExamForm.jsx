import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axiosInstance from '../../../../Utilities/axiosInstance';

const ExamForm = () => {
  const [formData, setFormData] = useState({
    batchName: '',
    title: '',
    description: '',
    scheduleDate: '',
    scheduleTime: '',
    duration: '',
    maxMarks: '',
    passMarks: '',
    totalQuestions: ''
  });

  const examOptions = {
    MERN: ['React', 'Node.js', 'HTML', 'MongoDB'],
    Python: ['Flask', 'Django', 'NumPy', 'Pandas'],
    Java: ['Core Java', 'Spring Boot', 'JSP'],
    Cpp: ['OOPs', 'STL', 'DSA']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'batchName') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        title: '' 
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axiosInstance.post('/create-exam',formData,{withCredentials: true});
      alert('✅ Exam created successfully!');
      navigate('/createquestion');
    } catch (error) {
      console.error('❌ Exam creation failed:', error);
      alert('Failed to create the exam. Please check your credentials or try again later.');
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-2xl shadow-lg bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Create Exam</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Batch Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Batch Name</label>
          <select
            name="batchName"
            value={formData.batchName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Batch</option>
            {Object.keys(examOptions).map((batch, idx) => (
              <option key={idx} value={batch}>
                {batch}
              </option>
            ))}
          </select>
        </div>

        {/* Exam Title */}
        {formData.batchName && (
          <div>
            <label className="block text-sm font-medium mb-1">Exam Title</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Title</option>
              {examOptions[formData.batchName].map((title, idx) => (
                <option key={idx} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          />
        </div>

        {/* Schedule Date and Time */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Schedule Date</label>
            <input
              type="date"
              name="scheduleDate"
              value={formData.scheduleDate}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Schedule Time</label>
            <input
              type="time"
              name="scheduleTime"
              value={formData.scheduleTime}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium mb-1">Duration (in minutes)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Max Marks, Pass Marks, Total Questions */}
        <div className="flex gap-4">
          <div className="w-1/3">
            <label className="block text-sm font-medium mb-1">Max Marks</label>
            <input
              type="number"
              name="maxMarks"
              value={formData.maxMarks}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-medium mb-1">Pass Marks</label>
            <input
              type="number"
              name="passMarks"
              value={formData.passMarks}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-medium mb-1">Total Questions</label>
            <input
              type="number"
              name="totalQuestions"
              value={formData.totalQuestions}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          <NavLink to="/createquestion">Submit</NavLink>
        </button>
      </form>
    </div>
  );
};

export default ExamForm;
