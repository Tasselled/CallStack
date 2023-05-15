import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import CommentInput from '../components/commentInput'
import PostBody from '../components/postBody.jsx'

//get request for comments should be done as an onclick in main body so this page just needs to assign items in currentPost to show, and then pulls
    //state of currentComments and renders them
function PostBodyContainer() {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.userReducer.errorMessage); 
    return(
        <div>
            <PostBody />
            {/* {stateComments} */}
            <CommentInput />
        </div>
    )
}

export default PostBodyContainer;