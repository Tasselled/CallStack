import { createSlice } from '@reduxjs/toolkit';


export const userReducer = createSlice({
  name: 'userReducer',
  initialState: {
    currentUser: null,
    currentPost: null,
    errorMessage: [],
    allPosts: []
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
    setAllPosts: (state, action) => {
      state.allPosts = action.payload
    }
  }
})

export const {setCurrentUser, setCurrentPost, setErrorMessage, setAllPosts} = userReducer.actions;

export default userReducer.reducer; 