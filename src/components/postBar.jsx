import React from "react";
import TagDropDownButton from "./TagDropDownButton";
import TagLinks from "./tagLinks";
import { useSelector, useDispatch } from "react-redux";
import { setAllPosts, setCurrentPost } from "../store/userReducer";
import { useNavigate } from "react-router-dom";

function PostBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const navigate = useNavigate();

  function mockPost(newPostTitle, newPostBody, username, postTag) {
    dispatch(
      setAllPosts(
        <div>
          <div>
            <img src="" alt="user-photo" />
          </div>

          <button
            className="mainPost"
            onClick={() => {
              dispatch(
                setCurrentPost(
                  <div>
                    <h1>{newPostTitle}</h1>
                    <p>{newPostBody}</p>
                    <div>{postTag}</div>
                    <div>5</div>
                    <div>2</div>
                  </div>
                )
              );
              navigate(`../post`);
            }}
          >
            <h1>{newPostTitle}</h1>
            <p>{newPostBody}</p>
            <div>{postTag}</div>
            <div>4</div>
            <div>2</div>
          </button>

          <div>
            <button>Tags</button>
            <button>Like</button>
            <button>Comment</button>
            <button>Date</button>
          </div>
        </div>
      )
    );
  }

  function makePost(newPostTitle, newPostBody, postTag) {
    fetch("/main/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        postTitle: newPostTitle,
        postBody: newPostBody,
        postTag: postTag,
      }),
    }).then(() => {
      dispatch(
        setAllPosts(
          <div>
            <button
              className="mainPost"
              onClick={() => {
                dispatch(
                  setCurrentPost(
                    <div>
                      <h1>{newPostTitle}</h1>
                      <p>{newPostBody}</p>
                      <div>{postTag}</div>
                      <div>0</div>
                      <div>0</div>
                    </div>
                  )
                );
                navigate(`./post`);
              }}
            >
              <h1>{newPostTitle}</h1>
              <p>{newPostBody}</p>
              <div>{postTag}</div>
              <div>0</div>
              <div>0</div>
            </button>

            <div>
              <button>Tags</button>
              <button>Like</button>
              <button>Comment</button>
              <button>Date</button>
            </div>
          </div>
        )
      );
    });
  }
  return (
    <div className="postBar">
      <div>
        <input type="text" placeholder="Enter a title" id="newPostTitle" />
        <br />
        <textarea
          type="text"
          placeholder="Enter your post"
          id="newPostBody"
          cols="40"
          rows="5"
        />
        <br />
        <div className="dropdown tagDiv">
          <TagDropDownButton tagLink="Tag" />
          <TagLinks />
        </div>

        <button
          className="postButtonSubmit"
          type="submit"
          onClick={() => {
            makePost(
              document.querySelector("#newPostTitle").value,
              document.querySelector("#newPostBody").value,
              "uncategorized"
            );
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default PostBar;
