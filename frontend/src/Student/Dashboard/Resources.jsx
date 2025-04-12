import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const resources = [
  {
    title: "HTML",
    description: "Learn the foundation of all websites: structure and markup.",
  },
  {
    title: "CSS",
    description: "Style your webpages beautifully and responsively.",
  },
  {
    title: "JavaScript",
    description: "Add interactivity and logic to your web apps.",
  },
  {
    title: "React",
    description: "Build powerful UIs with modern component-based architecture.",
    link:"https://react-step.netlify.app/"
  },
];

const scoreData = [
  { name: "Math", average: 78 },
  { name: "Science", average: 83 },
  { name: "English", average: 75 },
  { name: "Computer", average: 90 },
];

const pieData = [
  { name: "Attempted", value: 70 },
  { name: "Unattempted", value: 30 },
];

const COLORS = ["#4ade80", "#f87171"];

const Resources = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">📚 Learning Resources</h2>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {resources.map((res, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{res.title}</h3>
            <p className="text-gray-600 mb-4">{res.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Link to={res.link}> Learn More</Link>
             
            </button>
          </div>
        ))}
      </div>

      {/* Graph Section */}
      <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">📊 Exam Insights</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Average Score per Subject</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={scoreData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="average" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Attempted vs Unattempted</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Resources;
