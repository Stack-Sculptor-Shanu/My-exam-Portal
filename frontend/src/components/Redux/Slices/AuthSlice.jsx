import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    email: "",
    password: "",
    error: null,
    isLoggedIn: false,
    showPassword: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { name, value } = action.payload;
      state.data[name] = value;
    },
    setError: (state, action) => {
      state.data.error = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.data.isLoggedIn = action.payload;
    },
    togglePasswordVisibility: (state) => {
      state.data.showPassword = !state.data.showPassword;
    },
    resetState: (state) => {
      state.data = { ...initialState.data };
    },
  },
});

export const { setFormData, setError, setIsLoggedIn, togglePasswordVisibility, resetState } =
  authSlice.actions;
export default authSlice.reducer;
