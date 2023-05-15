import React from "react";
import GithubOAuth from "../components/githubOAuth";
import { Link, useNavigate } from "react-router-dom";
import {
  setCurrentUser,
  setErrorMessage,
  setAllPosts,
} from "../store/userReducer";
import { useSelector, useDispatch } from "react-redux";
import LeetCode from "../components/leetcodeQuiz";

function SignUpPage() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.userReducer.errorMessage);

  const navigate = useNavigate();

  function signUpUser(firstName, lastName, username, password) {
    if (!firstName || !lastName || !username || !password) {
      dispatch(
        setErrorMessage(
          <p>You have some incomplete fields, please complete form</p>
        )
      );
    } else {
      fetch("/login/signupRequest", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password,
        }),
      }).then(() => {
        dispatch(setCurrentUser(username));
        navigate(`/`);
      });
    }
  }

  const mockData = [
    {
      date: 5 / 23 / 2023,
      userId: "drake",
      postTitle: "Can I buy a porsche with a total comp of $300k?",
      postBody: `Now I got a house in LA Now I got a bigger pool than Ye And look man, Ye's pool is nice Mine's just big is what I'm saying`,
      postTag: "default",
      numLikes: 1,
    },
    {
      date: 5 / 23 / 2023,
      userId: "wayne",
      postTitle:
        "I just rejected a $500k total comp from Amazon because I want to work remote",
      postBody: `just testing this`,
      postTag: "default",
      numLikes: 1,
    },
  ];

  function getPosts() {
    fetch("/")
      .then((response) => response.json())
      .then((posts) => {
        for (let i = 0; i < posts.length; i++) {
          dispatch(
            setAllPosts(
              <div>
                <button className="mainPost">
                  <h1>{posts[i].postTitle}</h1>
                  <p>{posts[i].postBody}</p>
                  <div>{posts[i].postTag}</div>
                  <div>{posts[i].numLikes}</div>
                  <div>{posts[i].numComments}</div>
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
      })
      .catch((err) => {
        console.log("There was an error loading posts", err);
      });
  }

  function mockGet(mockData) {
    for (let i = 0; i < mockData.length; i++) {
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
                      <h1>{mockData[i].postTitle}</h1>
                      <p>{mockData[i].postBody}</p>
                      <div>{mockData[i].postTag}</div>
                      <div>{mockData[i].numLikes}</div>
                      <div>{mockData[i].numComments}</div>
                    </div>
                  )
                );
                navigate(`../post`);
              }}
            >
              <h1>{mockData[i].postTitle}</h1>
              <p>{mockData[i].postBody}</p>
              <div>{mockData[i].postTag}</div>
              <div>{mockData[i].numLikes}</div>
              <div>{mockData[i].numComments}</div>
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
  }

  return (
    <div>
      <LeetCode />
      <div
        className="answeredLeetCode signuppageDiv"
        style={{ display: "none" }}
      >
        <div>
          <i class="fa-solid fa-otter otterLogo"></i>
        </div>

        <div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <br />
            <input type="text" id="firstName" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input type="text" id="lastName" />
          </div>

          <div>
            <label htmlFor="username">username</label>
            <br />
            <input type="text" id="username" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" />
          </div>
        </div>
        {errorMessage}
        <div>
          <button
            onClick={() => {
              signUpUser(
                document.querySelector("#firstName").value,
                document.querySelector("#lastName").value,
                document.querySelector("#username").value,
                document.querySelector("#password").value
              );
              mockGet(mockData);
            }}
            m
          >
            Sign Up
          </button>
        </div>

        <GithubOAuth />

        <div>
          <p>Already a member?</p>
          <Link to="/loginpage">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
