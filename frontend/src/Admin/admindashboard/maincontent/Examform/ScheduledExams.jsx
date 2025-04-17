import React from 'react';


const ExamSchedule = () => {
    
const mockExamData = [
    {
      id: 1,
      batchName: 'MERN',
      title: 'React Final',
      description: 'Final exam covering React fundamentals and hooks.',
      scheduleDate: '2025-04-20',
      scheduleTime: '10:00',
      duration: 60,
      maxMarks: 100,
      passMarks: 40,
      totalQuestions: 25
    },
    {
      id: 2,
      batchName: 'Python',
      title: 'Django Midterm',
      description: 'Midterm test for Django basics and models.',
      scheduleDate: '2025-04-24',
      scheduleTime: '14:00',
      duration: 45,
      maxMarks: 80,
      passMarks: 32,
      totalQuestions: 20
    }
  ];
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Scheduled Exams</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {mockExamData.map((exam) => (
          <div key={exam.id} className="border rounded-xl p-5 shadow-md bg-white">
            <h3 className="text-xl font-semibold text-blue-600">{exam.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Batch: {exam.batchName}</p>
            <p className="text-gray-700 mb-1">{exam.description}</p>
            <div className="text-sm text-gray-800 mt-2">
              <p><strong>Date:</strong> {exam.scheduleDate}</p>
              <p><strong>Time:</strong> {exam.scheduleTime}</p>
              <p><strong>Duration:</strong> {exam.duration} minutes</p>
              <p><strong>Total Questions:</strong> {exam.totalQuestions}</p>
              <p><strong>Marks:</strong> {exam.passMarks} / {exam.maxMarks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamSchedule;
