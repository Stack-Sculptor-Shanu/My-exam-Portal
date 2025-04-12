import React, { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function Overview() {
  const [activeCard, setActiveCard] = useState(null);
  const [cancelExamId, setCancelExamId] = useState('');

  const stats = [
    { label: 'Total Registered Users', value: 1500 },
    { label: 'Total Exams Conducted', value: 120 },
    { label: 'Active Exams', value: 5 },
    { label: 'Total Submissions', value: 3400 },
    { label: 'Cancel Exam', value: '' } 
  ];

  const users = [
    { name: 'Jishu', email: 'jishu@gmail.com', registered: '2024-10-01' },
    { name: 'Shanu', email: 'shanu@gmail.com', registered: '2024-11-15' },
    { name: 'Biswajit', email: 'biswa@gmail.com', registered: '2024-12-02' }
  ];

  const examsConducted = [
    { batch: 'MERN', examName: 'React Test', date: '2025-03-20' },
    { batch: 'JAVA', examName: 'Spring Boot', date: '2025-03-25' },
    { batch: 'PYTHON', examName: 'Flask Test', date: '2025-03-28' },
  ];

  const activeExams = [
    { batch: 'TESTING', examName: 'Selenium Test', date: '2025-04-05' },
    { batch: 'AI', examName: 'ML Test', date: '2025-04-05' },
  ];

  const submissions = [
    { batch: 'MERN', examName: 'React Test', date: '2025-04-01', time: '10:00 AM' },
    { batch: 'JAVA', examName: 'Spring Boot', date: '2025-04-02', time: '2:30 PM' },
    { batch: 'PYTHON', examName: 'Flask Test', date: '2025-04-03', time: '11:15 AM' },
  ];

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'MERN',
        data: [50, 100, 350, 300, 400],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Python',
        data: [30, 300, 120, 180, 250],
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        tension: 0.4,
      },
      {
        label: 'JAVA',
        data: [40, 350, 160, 240, 50],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Testing',
        data: [0, 40, 80, 120, 150],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        tension: 0.4,
      }
    ]
  };

  const barData = {
    labels: ['React', 'JavaScript', 'MongoDB', 'HTML'],
    datasets: [{
      label: 'Exam Participation',
      data: [300, 500, 400, 250],
      backgroundColor: 'rgba(16, 185, 129, 0.7)',
    }]
  };

  const pieData = {
    labels: ['Passed', 'Failed'],
    datasets: [{
      label: 'Success Rate',
      data: [75, 25],
      backgroundColor: ['rgba(34, 197, 94, 0.7)', 'rgba(239, 68, 68, 0.7)']
    }]
  };

  return (
    <div className="p-6 space-y-6 overflow-auto scrollbar-none">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`bg-white dark:bg-gray-800 dark:text-white shadow rounded-xl p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
              activeCard === stat.label ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setActiveCard(stat.label)}
          >
            <h3 className="text-gray-500 dark:text-gray-300 text-sm">{stat.label}</h3>
            {stat.value && <p className="text-2xl font-bold">{stat.value}</p>}
          </div>
        ))}
      </div>

      {/* Registered Users Table */}
      {activeCard === 'Total Registered Users' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Registered Users</h3>
          <table className="w-full table-auto text-left border border-gray-200 dark:border-gray-600">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border dark:border-gray-600">Name</th>
                <th className="px-4 py-2 border dark:border-gray-600">Email</th>
                <th className="px-4 py-2 border dark:border-gray-600">Registered Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-600">{user.name}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{user.email}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{user.registered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Exams Conducted Table */}
      {activeCard === 'Total Exams Conducted' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Exams Conducted</h3>
          <table className="w-full table-auto text-left border border-gray-200 dark:border-gray-600">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border dark:border-gray-600">Batch</th>
                <th className="px-4 py-2 border dark:border-gray-600">Exam Name</th>
                <th className="px-4 py-2 border dark:border-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {examsConducted.map((exam, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-600">{exam.batch}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{exam.examName}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{exam.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Active Exams Table */}
      {activeCard === 'Active Exams' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Active Exams <span className="ml-2 text-red-500 animate-pulse">● Live</span></h3>
          <table className="w-full table-auto text-left border border-gray-200 dark:border-gray-600">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border dark:border-gray-600">Batch</th>
                <th className="px-4 py-2 border dark:border-gray-600">Exam Name</th>
                <th className="px-4 py-2 border dark:border-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {activeExams.map((exam, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-600">{exam.batch}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{exam.examName}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{exam.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Submissions Table */}
      {activeCard === 'Total Submissions' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Exam Submissions</h3>
          <table className="w-full table-auto text-left border border-gray-200 dark:border-gray-600">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border dark:border-gray-600">Batch</th>
                <th className="px-4 py-2 border dark:border-gray-600">Exam Name</th>
                <th className="px-4 py-2 border dark:border-gray-600">Date</th>
                <th className="px-4 py-2 border dark:border-gray-600">Submit Time</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-600">{submission.batch}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{submission.examName}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{submission.date}</td>
                  <td className="px-4 py-2 border dark:border-gray-600">{submission.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Cancel Exam Form */}
      {activeCard === 'Cancel Exam' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6 w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Cancel an Exam</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Exam with ID "${cancelExamId}" has been cancelled.`);
              setCancelExamId('');
              setActiveCard(null);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                Exam ID
              </label>
              <input
                type="text"
                value={cancelExamId}
                onChange={(e) => setCancelExamId(e.target.value)}
                required
                placeholder="Enter Exam ID"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Cancel Exam
            </button>
          </form>
        </div>
      )}

      {/* Charts (only when no card is selected) */}
      {!['Total Registered Users', 'Total Exams Conducted', 'Total Submissions', 'Active Exams', 'Cancel Exam'].includes(activeCard) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-xl shadow">
            <h3 className="mb-2 font-semibold">User Growth</h3>
            <Line data={lineData} />
          </div>
          <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-xl shadow">
            <h3 className="mb-2 font-semibold">Exam Participation</h3>
            <Bar data={barData} />
          </div>
          <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-xl shadow">
            <h3 className="mb-2 font-semibold">Exam Success Rate</h3>
            <Pie data={pieData} />
          </div>
        </div>
      )}
    </div>
  );
}
