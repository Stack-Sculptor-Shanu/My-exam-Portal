import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import teacher from '../../../Assets/teacher.svg';
import student from '../../../Assets/student.svg';

const Options = ({ onClose }) => {
  const popupRef = useRef(null);

  // Close the popup if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-15 backdrop-blur-lg"> {/* Apply backdrop-blur here */}
      <div
        ref={popupRef}
        className="bg-white bg-opacity-15 p-8 rounded-lg w-[80%] h-[70%] max-w-4xl flex flex-col sm:flex-row transition-all duration-300 ease-in-out"
      >
        <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800">
            Register as
        </h2>
        {/* Left side: Student Option */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-35 hover:shadow-lg">
          <img
            src={student} // Add a real student image URL here
            alt="Student"
            className="w-65 h-65 rounded-full mb-4 object-cover"
          />
          <div
            className="flex flex-col items-center"
            onClick={() => {
              onClose();
              window.location.href = '/studentReg'; // Redirect to student registration
            }}
          >
            <span className="text-xl font-semibold">Student</span>
            <span className="text-lg text-gray-500">Learner</span> {/* Designation under image */}
          </div>
        </div>

        {/* Right side: Teacher (Admin) Option */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90 hover:shadow-lg">
          <img
            src={teacher} // Add a real teacher image URL here
            alt="Teacher"
            className="w-65 h-65 rounded-full mb-4 object-cover"
          />
          <div
            className="flex flex-col items-center"
            onClick={() => {
              onClose();
              window.location.href = '/adminReg'; // Redirect to admin registration
            }}
          >
            <span className="text-xl font-semibold">Admin (Teacher)</span>
            <span className="text-lg text-gray-500">Instructor</span> {/* Designation under image */}
          </div>
        </div>
      </div>

      {/* Close Button */}
      <div className="absolute top-4 right-4">
        <button
          className="text-red-500 font-semibold hover:text-red-700"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Options;
