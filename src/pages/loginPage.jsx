import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, resolvePath } from 'react-router-dom'; // specifically for rerouting you
import { useDispatch, useSelector } from 'react-redux'; // react redux hooks

// redux action creators which we send in our dispatch.they take in the payload
// PS: we gave our types and action creators the same name.
import { setErrorMessage, setCurrentUser, setAllPosts, setCurrentPost, setCurrentComments, setCurrentPostId } from '../store/userReducer';

function loginPage() {
  const dispatch = useDispatch(); // the useDispatch is a react redux hook that lets us use our dispatch function in redux
  const errorMessage = useSelector((state) => state.userReducer.errorMessage); // useSelector lets us access state properties
  /* use navigate is a react hook that allows us to navigate to other pages, similar to our <Link></Link>. 
  but link is a react component that we wrap around a button */
  const navigate = useNavigate();

  function loginUser(username, password) {
    fetch('login/loginRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        dispatch(setErrorMessage([]));
        dispatch(setCurrentUser(username));
        navigate(`/`);
        getPosts();
      } else {
        dispatch(setErrorMessage([<p>wrong password/username</p>]));
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
      userId: 'KevinisDaBest1337',
      commentBody: 'Such an informative post!',
      // numLikes: 46,
    },
    {
      userId: 'PraiseForPraise',
      commentBody: "Redux is the best, people just don't get it",
      // numLikes: 2,
    },
  ];

  function getPosts() {
    fetch('/main/getAll')
      .then((response) => response.json())
      .then((posts) => {              
        for (let i = 0; i < posts.length; i++) {
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
                        <div className='currentClickedPost'>
                          <h1>{posts[i].postTitle}</h1>
                          <p>{posts[i].postBody}</p>
                          <div>{posts[i].postTag}</div>
                          <div>{posts[i].numLikes}</div>
                          <div>{posts[i].numComments}</div>
                        </div>
                      )
                    );
                    getComments(posts[i]._id)
                    dispatch(setCurrentPostId(posts[i]._id))
                    navigate(`../post`);
                    
                  }}>
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


  function getComments(postId){
    fetch('/main/getPostComments',{
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
       postId: postId
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("COMMENTS!!!!!", res)
        dispatch(setCurrentComments('delete'));
        for (let i = 0; i < res.length; i++) {
          dispatch(
            setCurrentComments(
              <div className='currentCommentBody'>
                {/* <p>{res[i].userId}</p> */}
                <p>{res[i].commentBody}</p>
                {/* <p>{mockComments[i].numLikes}</p> */}
              </div>
            )
          );
        }
      })
  }

  return (
    <div className='loginPageDiv'>
      <i class='fa-solid fa-otter otterLogo'></i>

      <div>
        <div>
          <label htmlFor='userId'>Username</label>
          <br/>
          <input type='text' id='username' />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <br/>
          <input type='password' id='password' />
        </div>
      </div>
      {errorMessage}
      <div>
        <button
          onClick={() => {
            loginUser(document.querySelector('#username').value, document.querySelector('#password').value);
            
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
