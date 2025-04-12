

import React from 'react';

const Home = () => {
  const exams = [
    {
      subject: 'React Exam',
      description: 'This exam tests basic ReactJS skills',
      date: 'April 15, 2025',
      time: '10:00 AM',
      totalQuestion: 20,
      maxMark: '100',
      category: 'MERN'
    },
    {
      subject: 'HTML & CSS',
      description: 'This exam covers fundamentals of web structure and styling',
      date: 'April 18, 2025',
      time: '12:00 PM',
      totalQuestion: 25,
      maxMark: '80',
      category: 'Frontend'
    },
    {
      subject: 'JavaScript Exam',
      description: 'Tests core JavaScript concepts and logic',
      date: 'April 20, 2025',
      time: '9:00 AM',
      totalQuestion: 30,
      maxMark: '100',
      category: 'Frontend'
    },
    {
      subject: 'MongoDB Basics',
      description: 'Basic concepts of MongoDB and NoSQL',
      date: 'April 22, 2025',
      time: '2:00 PM',
      totalQuestion: 15,
      maxMark: '60',
      category: 'Backend'
    }
  ];

  return (
    <div className="p-6  bg-gray-50  flex flex-col items-center justify-center">
      {/* Welcome Message */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
          Welcome to Exam Portal
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Ready for your next exam?
        </p>
      </div>

      {/* Exam Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-600"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2 ">{exam.subject}</h2>
            <div className="text-gray-700 space-y-1 text-sm">
              <p><strong>Description:</strong> {exam.description}</p>
              <p><strong>Date:</strong> {exam.date}</p>
              <p><strong>Time:</strong> {exam.time}</p>
              <p><strong>Total Questions:</strong> {exam.totalQuestion}</p>
              <p><strong>Max Marks:</strong> {exam.maxMark}</p>
              <p><strong>Category:</strong> {exam.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
