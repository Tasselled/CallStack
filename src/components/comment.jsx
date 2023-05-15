import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Comment() {
  const dispatch = useDispatch();
  const currentComments = useSelector(
    (state) => state.userReducer.currentComments
  );

  return (
    <div class="commentsBoxBorder">
      {/* <img></img>   Commenter's profile picture */}
      {/* <span> user's name will be displayed here /<span>*/}
      {/* this will be whatever the pulled comment is displayed in a <p></p> */}
      {currentComments}
    </div>
  );
}

export default Comment;
