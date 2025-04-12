import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setCurrentQuestion,
  setSelectedAnswer,
  setTimeLeft,
  setStopCamera,
  setConfirm,
  setExamSubmitted,
  resetSelectedAnswer,
} from "../../../components/Redux/Slices/ExamSlice";
import { useEffect } from "react";
import LiveFaceDetection from "./LiveFaceDetection";
import Confirmation from "./Confirmation";

// Example questions, if it's hardcoded
const questions = [
  { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Database"] },
  { id: 2, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"] },
  { id: 3, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"] },
];

const LiveExams = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentQuestionIndex, selectedAnswers, timeLeft, stopCamera, confirm, examSubmitted } = useSelector(
    (state) => state.exam
  );

  // Prevent navigation away from the exam
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave? Your progress will be lost.";
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleSubmit();
      }
    };

    const disableBackNavigation = () => {
      window.history.pushState(null, "", window.location.href);
    };

    const preventKeyNavigation = (event) => {
      if (event.key === "Escape" || (event.altKey && event.key === "Tab")) {
        event.preventDefault();
        handleSubmit();
      }
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", disableBackNavigation);
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("keydown", preventKeyNavigation);

    return () => {
      window.removeEventListener("popstate", disableBackNavigation);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("keydown", preventKeyNavigation);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === undefined) {
      dispatch(setTimeLeft(60));
    }

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        dispatch(setTimeLeft(timeLeft - 1));
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, dispatch]);

  const handleNext = () => {
    if (selectedAnswers[currentQuestionIndex]) {
      dispatch(setCurrentQuestion(Math.min(currentQuestionIndex + 1, questions.length - 1)));
    }
  };

  const handleRadioButtonChange = (option) => {
    dispatch(setSelectedAnswer({ questionId: currentQuestionIndex, answer: option }));
  };

  const handleSubmit = () => {
    sessionStorage.setItem("examCompleted", "true");
    const results = questions.map((q, index) => ({
      question: q.question,
      selectedAnswer: selectedAnswers[index] || "No answer selected",
    }));
    console.log("Submitted Answers:", results);
    dispatch(setExamSubmitted(true));
    navigate("/result", { replace: true });
    const navbar = document.getElementById("navigationbar");
    if (navbar) navbar.style.display = "";
    window.history.pushState(null, "", window.location.href);
    dispatch(setStopCamera(true));
    localStorage.removeItem("token");
  };

  const handleReset = () => {
    dispatch(resetSelectedAnswer(currentQuestionIndex));
  };

  const handleEndTest = () => {
    dispatch(setConfirm(true));
  };

  const handleConfirmEndTest = () => {
    handleSubmit();
    dispatch(setStopCamera(true));
    dispatch(setConfirm(false));
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    localStorage.removeItem("token");
  };

  const handleCancelEndTest = () => {
    dispatch(setConfirm(false));
  };

  const isNextDisabled = !selectedAnswers[currentQuestionIndex];

  // Format Time in MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Make sure currentQuestion is valid before trying to render it
  if (!currentQuestion) {
    return <div>Error: Invalid question index!</div>;
  }

  return (
    <div className="w-full h-screen flex bg-gray-100 p-5">
      {/* Question Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-4">Coding MCQs</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{currentQuestion.question}</h3>
          <div className="mt-2 space-y-2">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="block bg-gray-100 p-2 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  className="mr-2"
                  checked={selectedAnswers[currentQuestionIndex] === option}
                  onChange={() => handleRadioButtonChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div className="mt-auto flex justify-between space-x-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={handleReset}
          >
            Reset
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              className={`px-4 py-2 rounded-lg ${isNextDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
              disabled={isNextDisabled}
              onClick={handleNext}
            >
              Save & Next
            </button>
          ) : (
            <button
              className={`px-4 py-2 rounded-lg ${isNextDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
              disabled={isNextDisabled}
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>

      <div className="w-[300px] bg-white p-6 ml-5 rounded-lg shadow-lg flex flex-col items-center">
        {/* User Image */}
        <img
          src="https://imgs.search.brave.com/HZof5NcwDG0Te0CjHfnKxZSa10arSf39HE74desIo6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbG9nby1kc2E0/aXB6MG8yMmh1cTFi/LmpwZw"
          alt="User"
          className="w-50 h-60 rounded-full border-2 border-gray-300 mb-3"
        />
        <h3 className="text-lg font-semibold mb-2">John Doe</h3>
        <div className="h-text-lg font-bold bg-gray-200 px-4 py-2 rounded-md mb-3">
          ⏳ {formatTime(timeLeft)}
        </div>
        {/* Live Camera Recording */}
        <LiveFaceDetection stopCamera={stopCamera} />
        <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg" onClick={handleEndTest}>
          End Test
        </button>
      </div>

      {/* Confirmation Modal */}
      {confirm && (
        <Confirmation
          message="Are you sure you want to end the test?"
          onConfirm={handleConfirmEndTest}
          onCancel={handleCancelEndTest}
        />
      )}
    </div>
  );
};

export default LiveExams;
