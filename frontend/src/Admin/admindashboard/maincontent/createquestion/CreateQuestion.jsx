import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateQuestion() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: ''
  });

  const navigate = useNavigate();

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name === 'question' || name === 'correctAnswer') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else if (name === 'option' && index !== null) {
      const updatedOptions = [...formData.options];
      updatedOptions[index] = value;
      setFormData(prev => ({ ...prev, options: updatedOptions }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = formData;
    setQuestions(updatedQuestions);
    setCurrentQuestionIndex(updatedQuestions.length);
    setFormData({ question: '', options: ['', '', '', ''], correctAnswer: '' });
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
    setFormData(questions[index]);
  };

  const handleDone = () => {
    console.log('Final Questions:', questions);
    navigate('/aDashboard'); // Adjust route if needed
  };

  return (
    <div className="p-6 mt-5 max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md flex gap-6">
      
      {/* Left Form Section */}
      <div className="w-3/4">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Create Question
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Question</label>
            <input
              type="text"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="Enter your question"
              required
            />
          </div>

          {formData.options.map((option, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Option {index + 1}</label>
              <input
                type="text"
                name="option"
                value={option}
                onChange={(e) => handleChange(e, index)}
                className="w-full border px-3 py-2 rounded-md dark:bg-gray-700 dark:text-white"
                placeholder={`Enter option ${index + 1}`}
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correct Answer</label>
            <input
              type="text"
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="Enter correct answer"
              required
            />
          </div>

          <div className="flex justify-between">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Save Question</button>
            <button type="button" onClick={handleDone} className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">Done</button>
          </div>
        </form>
      </div>

      {/* Right Question Number List */}
      <div className="w-1/4">
        <h3 className="text-lg font-semibold mb-2 text-center text-gray-700 dark:text-white">Questions</h3>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg space-y-2 max-h-96 overflow-y-auto">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleQuestionSelect(index)}
              className={`w-full text-left px-4 py-2 rounded-md ${
                index === currentQuestionIndex ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-600'
              } hover:bg-blue-100 dark:hover:bg-gray-500`}
            >
              Question {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
