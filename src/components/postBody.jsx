import React from "react";
import { useDispatch, useSelector } from "react-redux";

//This will render the actual title and post
//need to pull what the current title and post are from state

function PostBody() {
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.userReducer.currentPost);
  return <div>{currentPost}</div>;
}

export default PostBody;
