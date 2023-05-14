import { createSlice } from '@reduxjs/toolkit';


export const userReducer = createSlice({
  name: 'userReducer',
  initialState: {
    currentUser: null,
    currentPost: null,
    errorMessage: []
  },

  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  }
})

export const {setCurrentUser, setCurrentPost, setErrorMessage} = userReducer.actions;

export default userReducer.reducer; 