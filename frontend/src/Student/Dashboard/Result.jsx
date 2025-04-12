

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Result = () => {
  const examResults = {
   HTML: [
      { date: "2024-05-01", score: 85, total: 100, status: "Pass" },
      { date: "2024-03-10", score: 76, total: 100, status: "Pass" },
    ],
    CSS: [
      { date: "2024-04-15", score: 72, total: 100, status: "Pass" },
      { date: "2024-02-10", score: 68, total: 100, status: "Pass" },
    ],
    Reactjs: [
      { date: "2024-03-22", score: 55, total: 100, status: "Pass" },
    ],
    javascript: [
      { date: "2024-02-05", score: 40, total: 100, status: "Fail" },
    ],
  };

  const [expandedSubject, setExpandedSubject] = useState(null);

  const toggleSubject = (subject) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  // 📊 Build graph data based on selected subject or all
  const graphData = expandedSubject
    ? examResults[expandedSubject].map((res) => ({
        subject: expandedSubject,
        date: res.date,
        score: res.score,
      }))
    : Object.entries(examResults).flatMap(([subject, results]) =>
        results.map((res) => ({
          subject,
          date: res.date,
          score: res.score,
        }))
      );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">📄 Your Exam Results</h2>

      {/* Subject Result Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {Object.keys(examResults).map((subject, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
            <div
              onClick={() => toggleSubject(subject)}
              className="cursor-pointer flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">{subject}</h3>
              <span className="text-sm text-blue-600 font-medium">
                {expandedSubject === subject ? "Hide" : "Show"}
              </span>
            </div>

            {expandedSubject === subject && (
              <div className="mt-4">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Exam Date</th>
                      <th className="border p-2">Score</th>
                      <th className="border p-2">Total</th>
                      <th className="border p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examResults[subject].map((result, i) => (
                      <tr key={i} className="text-center">
                        <td className="border p-2">{result.date}</td>
                        <td className="border p-2">{result.score}</td>
                        <td className="border p-2">{result.total}</td>
                        <td
                          className={`border p-2 font-semibold ${
                            result.status === "Pass" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {result.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 📈 Student Growth Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          📈 {expandedSubject ? `${expandedSubject} Growth Chart` : "Student Growth Over Time"}
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={graphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              name="Score"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Result;
