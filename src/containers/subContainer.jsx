import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser, setErrorMessage, setCurrentComments, setCurrentPost } from "../store/userReducer";
import { useSelector, useDispatch } from "react-redux";






function SubContainer () {
  const allPosts = useSelector(state=>state.userReducer.allPosts);
  const dispatch = useDispatch();
  
  const errorMessage = useSelector(state => state.userReducer.errorMessage); 
  const navigate = useNavigate();
//onClick of post will ivoke this function, so the onclick will have to pass in the currentPost id
  function mockPostOpen() {
    //fetch all comments for post
    fetch('/comments', {
      method: 'Get',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
    .then((res) => {
      if (res.body) {
        dispatch(setErrorMessage([]));
        dispatch(setCurrentPost(postId));
        dispatch(setCurrentComments(res))
        navigate(`/post`);
      } else {
        dispatch(setErrorMessage([<p>No post found</p>]))
      }
    })
  }
  return (
    <div>
      {allPosts}
    </div>  
  )
}

export default SubContainer;