// src/redux/slices/adminSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data:{
        name: '',
        email: '',
        phone: '',
        branch: 'all',
    }
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
      setAdminData: (state, action) => {
        const {name,value}=action.payload
       state.data={...state.data,[name]:value}
      },
    },
  });
  

export const { setAdminData } = adminSlice.actions;
export default adminSlice.reducer;
