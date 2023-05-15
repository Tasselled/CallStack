import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'; // specifically for rerouting you
import { useDispatch, useSelector } from 'react-redux'; // react redux hooks

// redux action creators which we send in our dispatch.they take in the payload
// PS: we gave our types and action creators the same name.
import { setErrorMessage, setCurrentUser, setAllPosts, setCurrentPost, setCurrentComments } from '../store/userReducer';

function loginPage() {
  const dispatch = useDispatch(); // the useDispatch is a react redux hook that lets us use our dispatch function in redux
  const errorMessage = useSelector((state) => state.userReducer.errorMessage); // useSelector lets us access state properties
  /* use navigate is a react hook that allows us to navigate to other pages, similar to our <Link></Link>. 
  but link is a react component that we wrap around a button */
  const navigate = useNavigate();

  function loginUser(username, password) {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => {
      if (res.body) {
        dispatch(setErrorMessage([]));
        dispatch(setCurrentUser(username));
        navigate(`/`);
      } else {
        dispatch(setErrorMessage([<p></p>]));
      }
    });
  }

  function mockLogin(username, password) {
    console.log(username, password);
    if (username === 'a' && password === 'a') {
      dispatch(setErrorMessage([]));
      dispatch(setCurrentUser(username));
      navigate(`/`);
    } else dispatch(setErrorMessage([<p>incorrect username/password</p>]));
  }

  const mockData = [
    {
      date: 5 / 23 / 2023,
      userId: 'drake',
      postTitle: 'Can I buy a porsche with a total comp of $300k?',
      postBody: `Now I got a house in LA Now I got a bigger pool than Ye And look man, Ye's pool is nice Mine's just big is what I'm saying`,
      postTag: 'default',
      numLikes: 1,
    },
    {
      date: 5 / 23 / 2023,
      userId: 'wayne',
      postTitle: 'I just rejected a $500k total comp from Amazon because I want to work remote',
      postBody: `just testing this`,
      postTag: 'default',
      numLikes: 1,
    },
    {
      date: 5 / 23 / 2023,
      userId: 'drake',
      postTitle: 'This is our first title',
      postBody: `Now I got a house in LA Now I got a bigger pool than Ye And look man, Ye's pool is nice Mine's just big is what I'm saying`,
      postTag: 'default',
      numLikes: 5000,
    },
    {
      date: 5 / 23 / 2023,
      userId: 'wayne',
      postTitle: 'This is our second title',
      postBody: `adulthood is emailing "sorry for the delayed response!" back and forth until one of you dies`,
      postTag: 'default',
      numLikes: 1,
    },
  ];

  const mockComments = [
    {
      userId: "KevinisDaBest1337",
      commentBody: "Such an informative post!",
      numLikes: 46,
    },
    {
      userId: "PraiseForPraise",
      commentBody: "Redux is the best, people just don't get it",
      numLikes: 2,
    },
  ]

  function getPosts() {
    fetch('/')
      .then((response) => response.json())
      .then((posts) => {
        for (let i = 0; i < posts.length; i++) {
          dispatch(
            setAllPosts(
              <div>
                <div>
                  <img src='' alt='user-photo' />
                </div>

                <button className='mainPost'>
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
        console.log('There was an error loading posts', err);
      });
  }

  function mockGet(mockData) {
    for (let i = 0; i < mockData.length; i++) {
      dispatch(
        setAllPosts(
          <div>
            <div>
              <img src='' alt='user-photo' />
            </div>

            <button
              className='mainPost'
              onClick={() => {
                dispatch(
                  setCurrentPost(
                    <div className="currentClickedPost">
                      <h1>{mockData[i].postTitle}</h1>
                      <p>{mockData[i].postBody}</p>
                      <div>{mockData[i].postTag}</div>
                      <div>{mockData[i].numLikes}</div>
                      <div>{mockData[i].numComments}</div>
                    </div>
                  )
                );
                navigate(
                  `../post`
                );
              }}>
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

  function mockGetComments(){
    for (let i = 0; i < mockComments.length; i++){
      dispatch (
        setCurrentComments(
          <div className="currentCommentBody">
            <p>{mockComments[i].userId}</p>
            <p>{mockComments[i].commentBody}</p>
            <p>{mockComments[i].numLikes}</p>
          </div>
        )
      )   
    }
  }

  return (
    <div>
      <i class='fa-solid fa-otter otterLogo'></i>

      <div>
        <div>
          <label htmlFor='userId'>Username</label>
          <input type='text' id='username' />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
      </div>
      {errorMessage}
      <div>
        <button
          onClick={() => {
            mockLogin(document.querySelector('#username').value, document.querySelector('#password').value);

            mockGet(mockData);

            mockGetComments();

          }}>
          Login
        </button>
      </div>

      <div>
        <p>Not A Member?</p>
        <Link to='/signuppage'>
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default loginPage;
