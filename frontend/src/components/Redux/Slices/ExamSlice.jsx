import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExamActive: false,
  isFullScreen: false,
  currentQuestionIndex: 0,
  answers: {},
  confirm: false, // Add confirm in initial state
  examSubmitted: false,
  stopCamera: false,
  timeLeft: 60,
  selectedAnswers: {}
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setExamStatus: (state, action) => {
      state.isExamActive = action.payload;
    },
    enterFullScreen: (state) => {
      state.isFullScreen = true;
    },
    exitExam: (state) => {
      state.isExamActive = false;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    saveAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    resetSelectedAnswer: (state, action) => {
      const questionId = action.payload;
      delete state.answers[questionId];
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.selectedAnswers[questionId] = answer;
    },
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
    },
    setStopCamera: (state, action) => {
      state.stopCamera = action.payload;
    },
    setExamSubmitted: (state, action) => {
      state.examSubmitted = action.payload;
    },
    setConfirm: (state, action) => {
      state.confirm = action.payload; // Set confirm status to true or false
    },
  },
});

export const { 
  setExamStatus, 
  enterFullScreen, 
  exitExam, 
  nextQuestion, 
  saveAnswer, 
  resetSelectedAnswer, 
  setCurrentQuestion, 
  setSelectedAnswer, 
  setTimeLeft, 
  setStopCamera, 
  setExamSubmitted, 
  setConfirm 
} = examSlice.actions;

export default examSlice.reducer;
