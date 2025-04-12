import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ResultsAndReports() {
  const [activeCard, setActiveCard] = useState(null);

  const resultStats = [
    { label: 'Total Submissions', value: 3400 },
    { label: 'Average Score', value: '78%' },
    { label: 'Highest Score', value: '100%' },
    { label: 'Failed Students', value: 125 }
  ];

  const submissions = [
    { batch: 'MERN', examName: 'React Basics', email: 'alice@mern.com', mark: 85, date: '2025-04-02' },
    { batch: 'JAVA', examName: 'OOP Concepts', email: 'mark@java.com', mark: 72, date: '2025-04-03' },
    { batch: 'PYTHON', examName: 'Python Test', email: 'emma@python.com', mark: 91, date: '2025-04-01' },
    { batch: 'TESTING', examName: 'Manual QA', email: 'liam@testing.com', mark: 42, date: '2025-03-30' },
    { batch: 'DSA', examName: 'Array & Strings', email: 'noah@dsa.com', mark: 95, date: '2025-04-04' },
    { batch: 'MERN', examName: 'Advanced React', email: 'olivia@mern.com', mark: 99, date: '2025-04-04' },
    { batch: 'JAVA', examName: 'Spring Boot', email: 'lucas@java.com', mark: 58, date: '2025-04-05' },
    { batch: 'PYTHON', examName: 'Flask', email: 'sophia@python.com', mark: 100, date: '2025-04-03' },
    { batch: 'TESTING', examName: 'Automation QA', email: 'ethan@testing.com', mark: 33, date: '2025-04-04' }
  ];

  const averageScoreData = {
    labels: ['Above Average (80-100)', 'Average (60-79)', 'Below Average (<60)'],
    datasets: [
      {
        label: 'Score Distribution',
        data: [5, 2, 2],
        backgroundColor: ['#4ade80', '#60a5fa', '#f87171'],
        borderColor: ['#4ade80', '#60a5fa', '#f87171'],
        borderWidth: 1
      }
    ]
  };

  const handleCardClick = (label) => {
    setActiveCard(prev => (prev === label ? null : label));
  };

  const top5Students = [...submissions].sort((a, b) => b.mark - a.mark).slice(0, 5);
  const failedStudents = submissions.filter(s => s.mark < 60);

  return (
    <div className="p-6 space-y-6 overflow-auto scrollbar-none">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {resultStats.map((stat, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(stat.label)}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
              activeCard === stat.label ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <h3 className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Total Submissions Table */}
      {activeCard === 'Total Submissions' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Total Submissions</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3 border dark:border-gray-600 text-left">Batch</th>
                <th className="p-3 border dark:border-gray-600 text-left">Exam Name</th>
                <th className="p-3 border dark:border-gray-600 text-left">Email ID</th>
                <th className="p-3 border dark:border-gray-600 text-left">Mark</th>
                <th className="p-3 border dark:border-gray-600 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 border dark:border-gray-600">{submission.batch}</td>
                  <td className="p-3 border dark:border-gray-600">{submission.examName}</td>
                  <td className="p-3 border dark:border-gray-600">{submission.email}</td>
                  <td className="p-3 border dark:border-gray-600">{submission.mark}</td>
                  <td className="p-3 border dark:border-gray-600">{submission.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Average Score Pie Chart */}
      {activeCard === 'Average Score' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Average Score Distribution</h3>
          <div className="w-full max-w-md mx-auto">
            <Pie data={averageScoreData} />
          </div>
        </div>
      )}

      {/* Highest Score Table */}
      {activeCard === 'Highest Score' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Top 5 Highest Scoring Students</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3 border dark:border-gray-600 text-left">Batch</th>
                <th className="p-3 border dark:border-gray-600 text-left">Email</th>
                <th className="p-3 border dark:border-gray-600 text-left">Exam Name</th>
                <th className="p-3 border dark:border-gray-600 text-left">Mark</th>
              </tr>
            </thead>
            <tbody>
              {top5Students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 border dark:border-gray-600">{student.batch}</td>
                  <td className="p-3 border dark:border-gray-600">{student.email}</td>
                  <td className="p-3 border dark:border-gray-600">{student.examName}</td>
                  <td className="p-3 border dark:border-gray-600">{student.mark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Failed Students Table */}
      {activeCard === 'Failed Students' && (
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Failed Students (Mark &lt; 60)</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3 border dark:border-gray-600 text-left">Batch</th>
                <th className="p-3 border dark:border-gray-600 text-left">Exam Name</th>
                <th className="p-3 border dark:border-gray-600 text-left">Email</th>
                <th className="p-3 border dark:border-gray-600 text-left">Mark</th>
                <th className="p-3 border dark:border-gray-600 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {failedStudents.map((student, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 border dark:border-gray-600">{student.batch}</td>
                  <td className="p-3 border dark:border-gray-600">{student.examName}</td>
                  <td className="p-3 border dark:border-gray-600">{student.email}</td>
                  <td className="p-3 border dark:border-gray-600">{student.mark}</td>
                  <td className="p-3 border dark:border-gray-600 text-red-500 text-lg">❌</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
