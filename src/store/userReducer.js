import { createSlice } from '@reduxjs/toolkit';


export const userReducer = createSlice({
  name: 'userReducer',
  initialState: {
    currentUser: null,
  },

  reducers: {
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    }
  }
})

export const {currentUser} = userReducer.actions;

export default userReducer.reducer; 