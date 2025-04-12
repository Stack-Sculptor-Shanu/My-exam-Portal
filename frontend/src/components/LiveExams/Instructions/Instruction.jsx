import React, { useState } from "react";
import { FaCamera, FaExclamationCircle, FaBan } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';

const Instruction = () => {
  const [language, setLanguage] = useState("English"); 
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const navbar = document.getElementById("navigationbar");
          if (navbar) navbar.style.display = "none";
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Edge
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    navigate('/exampage');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Live Exam Instructions
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Please read the following instructions carefully before starting your exam.
          These guidelines are designed to ensure a fair and smooth exam experience.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <FaCamera className="text-4xl text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Camera Usage
              </h3>
              <p className="text-gray-600">
                You must keep your camera on at all times during the exam. We will
                monitor your activity through the camera to ensure fairness. Make sure
                the camera is positioned correctly and is able to clearly capture your face.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaExclamationCircle className="text-4xl text-yellow-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Proper Sitting Position
              </h3>
              <p className="text-gray-600">
                Please sit properly in front of the camera. If we detect that you are
                not visible clearly (e.g., too far, head tilted, or out of the camera frame),
                you will receive a warning. Make sure the lighting is adequate to show your face clearly.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaExclamationCircle className="text-4xl text-yellow-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Multiple Faces Detection
              </h3>
              <p className="text-gray-600">
                If more than one face is detected in the camera view, it will trigger
                a warning. This means no one else should be in the camera frame while
                you are taking the exam. Any attempt to cheat or engage in malpractice
                will result in immediate disqualification.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaBan className="text-4xl text-red-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No External Assistance
              </h3>
              <p className="text-gray-600">
                You are not allowed to receive assistance from anyone during the exam.
                Any signs of external help or communication (e.g., speaking with someone
                in the room) will result in disqualification. Keep your hands visible and
                refrain from using any unauthorized resources.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaExclamationCircle className="text-4xl text-yellow-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Keep Your Workspace Clear
              </h3>
              <p className="text-gray-600">
                Ensure your desk or table is clean and free from any materials that could
                aid you during the exam. Only the exam window should be open on your screen.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaExclamationCircle className="text-4xl text-yellow-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Interruptions or Distractions
              </h3>
              <p className="text-gray-600">
                Make sure you are in a quiet and distraction-free environment. Any interruptions,
                such as loud noises or background movement, may lead to warnings or disqualification.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaExclamationCircle className="text-4xl text-yellow-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Monitoring and Recording
              </h3>
              <p className="text-gray-600">
                Please be aware that the exam will be monitored and recorded for security purposes.
                Any violation of the exam rules may be reported for further investigation.
              </p>
            </div>
          </div>

          {/* Language Selection */}
          <div className="mt-6">
            <label htmlFor="language" className="block text-lg font-semibold text-gray-800 mb-2">
              Choose Your Language
            </label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="English">English</option>
            </select>
          </div>

          {/* Checkbox for Terms Acceptance */}
          <div className="mt-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-800 text-lg">
              I have read and understood the instructions.
            </label>
          </div>

          {/* Start Exam Button */}
          <div className="mt-8 text-center">
            <button
              disabled={!isChecked}
              onClick={handleSubmit}
              className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ${
                !isChecked ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Start Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
