// Redux slice example
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    name: '',
    email: '',
    phone: '',
    branch: '',  // Add branch here
  },
  reducers: {
    setStudentData: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value; // Set the corresponding field in the state
    },
  },
});

export const { setStudentData } = studentSlice.actions;
export default studentSlice.reducer;
