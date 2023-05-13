import { createSlice } from '@reduxjs/toolkit';


export const userReducer = createSlice({
  name: 'userReducer',
  initialState: {
    currentUser: null,
    currentPost: null
  },

  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
  }
})

export const {setCurrentUser, setCurrentPost} = userReducer.actions;

export default userReducer.reducer; 