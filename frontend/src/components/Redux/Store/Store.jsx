import { configureStore } from "@reduxjs/toolkit";
import examReducer from "../Slices/ExamSlice";
import adminReducer from '../Slices/AdminSlice'
import authReducer from '../Slices/AuthSlice'
import studentReducer from '../Slices/StudentSlice'

const store = configureStore({
  reducer: {
    exam: examReducer,
    admin: adminReducer,
    auth: authReducer,
    student:studentReducer
  },
});

export default store;
