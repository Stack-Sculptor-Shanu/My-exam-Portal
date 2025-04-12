import React from "react";

const MyExam = () => {
  // Sample Exam Data
  const exams = [
    {
      id: 1,
      title: "javascript",
      subject: "javascript",
      date: "April 10, 2025",
      time: "10:00 AM",
      duration: "1 Hour",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "css",
      subject: "css",
      date: "April 8, 2025",
      time: "2:00 PM",
      duration: "30 Minutes",
      status: "Ongoing",
    },
    {
      id: 3,
      title: "html Exam",
      subject: "Html",
      date: "April 5, 2025",
      time: "9:00 AM",
      duration: "2 Hours",
      status: "Completed",
    },
  ];

  return (
    <div className="p-6  bg-gray-50   flex-col flex ">
      <h1 className="text-2xl font-bold mb-4">📋 My Exam List</h1>

      <div className="bg-white shadow-lg rounded-lg p-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Time</th>
              <th className="p-2 border">Duration</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id} className="text-center bg-gray-50">
                <td className="p-2 border">{exam.title}</td>
                <td className="p-2 border">{exam.subject}</td>
                <td className="p-2 border">{exam.date}</td>
                <td className="p-2 border">{exam.time}</td>
                <td className="p-2 border">{exam.duration}</td>
                <td
                  className={`p-2 border font-semibold ${
                    exam.status === "Upcoming"
                      ? "text-yellow-600"
                      : exam.status === "Ongoing"
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {exam.status}
                </td>
                <td className="p-2 border">
                  {exam.status === "Upcoming" && (
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                      Join
                    </button>
                  )}
                  {exam.status === "Ongoing" && (
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700">
                      Continue
                    </button>
                  )}
                  {exam.status === "Completed" && (
                    <button className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-700">
                      View Result
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyExam;
