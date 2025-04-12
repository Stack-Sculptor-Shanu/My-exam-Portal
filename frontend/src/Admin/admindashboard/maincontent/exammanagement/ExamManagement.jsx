import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ExamManagement() {
  const [selectedCard, setSelectedCard] = useState(null);

  const examStats = [
    { label: 'Total Exams', value: 250 },
    { label: 'Upcoming Exams', value: 20 },
    { label: 'Ongoing Exams', value: 5 },
    { label: 'Completed Exams', value: 225 }
  ];

  const examDetails = [
    { batch: 'MERN', examName: 'React Test', date: '2025-04-15' },
    { batch: 'JAVA', examName: 'Java Test', date: '2025-04-18' },
    { batch: 'TESTING', examName: 'Testing Test', date: '2025-04-20' },
    { batch: 'PYTHON', examName: 'Python Test', date: '2025-04-10' }
  ];

  const upcomingExamDetails = [
    { batch: 'DEVOPS', examName: 'CI/CD Pipeline Exam', date: '2025-04-21' },
    { batch: 'UI/UX', examName: 'Design Principles Exam', date: '2025-04-23' },
    { batch: 'CLOUD', examName: 'AWS Certification Mock', date: '2025-04-25' }
  ];

  const ongoingExamDetails = [
    { batch: 'NODE', examName: 'Backend API Exam', date: '2025-04-05' },
    { batch: 'DB', examName: 'SQL & NoSQL Test', date: '2025-04-06' }
  ];

  const completedExamDetails = [
    { batch: 'DATA SCIENCE', examName: 'Data Analysis Test', date: '2025-03-30' },
    { batch: 'ANDROID', examName: 'Kotlin Mock Test', date: '2025-03-28' }
  ];

  return (
    <div className="p-6 space-y-6 overflow-auto scrollbar-none">
      {/* Create Exam Card */}
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 w-full flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Create a New Exam</h2>
        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          <NavLink to='/examform'>Create Now</NavLink>
        </button>
      </div>

      {/* Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {examStats.map((stat, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(stat.label)}
            className={`bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
              selectedCard === stat.label ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <h3 className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Conditional Table Rendering */}
      {selectedCard === 'Total Exams' && (
        <ExamTable title="All Exam Details" data={examDetails} />
      )}

      {selectedCard === 'Upcoming Exams' && (
        <ExamTable title="Upcoming Exams" data={upcomingExamDetails} />
      )}

      {selectedCard === 'Ongoing Exams' && (
        <ExamTable title="Ongoing Exams ● Live" data={ongoingExamDetails} highlightLive />
      )}

      {selectedCard === 'Completed Exams' && (
        <ExamTable title="Completed Exams" data={completedExamDetails} />
      )}
    </div>
  );
}

function ExamTable({ title, data, highlightLive }) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">
        {title} {highlightLive && <span className="text-red-500">●</span>}
      </h3>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-3 border dark:border-gray-600 text-left">Batch</th>
            <th className="p-3 border dark:border-gray-600 text-left">Exam Name</th>
            <th className="p-3 border dark:border-gray-600 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((exam, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="p-3 border dark:border-gray-600">{exam.batch}</td>
              <td className="p-3 border dark:border-gray-600">{exam.examName}</td>
              <td className="p-3 border dark:border-gray-600">{exam.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
