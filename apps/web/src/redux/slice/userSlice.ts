'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  roleId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (prevState = initialState, action) => {
      prevState.firstName = action.payload.firstName;
      prevState.lastName = action.payload.lastName;
      prevState.email = action.payload.email;
      prevState.roleId = action.payload.roleId;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
