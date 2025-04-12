import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Result = ({ score, rank, timeTaken, right, wrong, stopCamera, mediaStream }) => {
  const navigate = useNavigate();
  const examSubmitted = useSelector((state) => state.exam.examSubmitted);

  useEffect(() => {
    // If exam is submitted, we redirect user to homepage if they try to navigate back
    if (!examSubmitted) {
      navigate("/"); // Redirect to the homepage if the exam is not submitted
    }

    // Prevent the user from going back after submitting the exam
    const handlePopState = () => {
      navigate("/"); // Redirect to homepage if trying to go back
    };

    // Listen for the back navigation (popstate event)
    window.addEventListener("popstate", handlePopState);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [examSubmitted, navigate]);

  useEffect(() => {
    // Stop the camera when exam is submitted and stopCamera flag is true
    if (stopCamera) {
      console.log("Stopping the camera...");
      const videoTracks = mediaStream?.getVideoTracks();
      videoTracks?.forEach((track) => track.stop());
    }
  }, [stopCamera, mediaStream]);

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gray-300 p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Exam Results</h2>

      {/* Result Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* Score */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-inner transition">
          <h3 className="text-2xl font-semibold">🖋Score</h3>
          <p className="text-3xl font-bold mt-2">{score} / 15</p>
          <p className="mt-2 text-lg">Total marks earned based on correct answers.</p>
        </div>

        {/* Rank */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold">🤚Rank</h3>
          <p className="text-3xl font-bold mt-2">{rank}</p>
          <p className="mt-2 text-lg">Your position among all participants.</p>
        </div>

        {/* Time Taken */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold">⌚Time Taken</h3>
          <p className="text-3xl font-bold mt-2">{timeTaken} min</p>
          <p className="mt-2 text-lg">Total time you spent completing the exam.</p>
        </div>

        {/* Right Answers */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold">✅Right Answers</h3>
          <p className="text-3xl font-bold mt-2">{right} / 15</p>
          <p className="mt-2 text-lg">Number of correct responses.</p>
        </div>

        {/* Wrong Answers */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold">❌Wrong Answers</h3>
          <p className="text-3xl font-bold mt-2">{wrong} / 15</p>
          <p className="mt-2 text-lg">Number of incorrect responses.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8">
        {/* Option to Retake Exam */}
        <button
          onClick={() => navigate("/exam")} // Redirect to Exam page if retake
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-4"
        >
          Retake Exam
        </button>

        {/* Option to View Correct Answers */}
        <button
          onClick={() => navigate("/correct-answers")} // Redirect to the correct answers page
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          View Correct Answers
        </button>
      </div>
    </div>
  );
};

export default Result;
