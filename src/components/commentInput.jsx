import React from "react";
import "../stylesheets/postPageStyles.scss";
import { setCurrentComments, setErrorMessage } from "../store/userReducer";
import { useDispatch, useSelector } from "react-redux";

function CommentInput() {
  let dispatch = useDispatch();
  let currentPostId = useSelector((state) => state.userReducer.currentPostId);
  //onClick of comment button, send a post request of the comment to the database
  //then update state of currentComments
  function postComment(comment) {
    fetch("/main/createPostComments", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        postId: currentPostId,
        commentBody: comment,
      }),
    }).then((res) => {
      if (res.body) {
        dispatch(setErrorMessage([]));
        dispatch(
          setCurrentComments(<p className="currentCommentBody">{comment}</p>)
        );
      } else {
        dispatch(setErrorMessage([<p></p>]));
      }
    });
  }

  return (
    <div class="commentBox">
      <input class="input" placeholder="Write your comment here"></input>
      <button
        class="commentButton"
        type="submit"
        onClick={() => {
          postComment(document.querySelector(".input").value);
          document.querySelector(".input").value = "";
        }}
      >
        Comment
      </button>
    </div>
  );
}

export default CommentInput;
