import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
  name: 'userReducer',
  initialState: {
    currentUser: null,
    currentPost: null,
    errorMessage: [],
    tags: [],
    searchResultPosts: [],
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
    setTags: (state, action) => {
      if (action.payload === 'delete') state.tags = [];
      else if (state.tags.includes(action.payload))
        state.tags = state.tags
          .slice(0, state.tags.indexOf(action.payload))
          .concat(state.tags.indexOf(action.payload) + 1);
      else state.tags = [...state.tags, action.payload];
    },
    setSearchResultPosts: (state, action) => {
      state.searchResultPosts = action.payload === 'delete' ? [] : [...state.searchResultPosts, action.payload];
    },
    setAllPosts: (state, action) => {
      state.allPosts = [...state.allPosts, ...action.payload]
    }
  },
});

export const { setCurrentUser, setCurrentPost, setErrorMessage, setTags, setSearchResultPosts, setAllPosts } = userReducer.actions;


export default userReducer.reducer;
