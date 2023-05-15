import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'; // specifically for rerouting you
import { useDispatch, useSelector } from 'react-redux'; // react redux hooks 

// redux action creators which we send in our dispatch.they take in the payload
// PS: we gave our types and action creators the same name. 
import { setErrorMessage, setCurrentUser, setAllPosts } from '../store/userReducer'; 

function loginPage(){
  const dispatch = useDispatch() // the useDispatch is a react redux hook that lets us use our dispatch function in redux
  const errorMessage = useSelector(state=>state.userReducer.errorMessage) // useSelector lets us access state properties
  /* use navigate is a react hook that allows us to navigate to other pages, similar to our <Link></Link>. 
  but link is a react component that we wrap around a button */
  const navigate = useNavigate() 

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
    })
    .then((res) => {
      if (res.body) {
        dispatch(setErrorMessage([]))
        dispatch(setCurrentUser(username));
        navigate(`/${username}`)
      } else {
        dispatch(setErrorMessage([<p></p>]))
      }
  
    })
    
  }


  function mockLogin(username, password) {
    console.log(username, password)
      if(username === "a" && password === "a"){ 
        dispatch(setErrorMessage([]))
        dispatch(setCurrentUser(username));
        navigate(`/${username}`)
      }
      else dispatch(setErrorMessage([<p>incorrect username/password</p>]))
  }

  const mockData = [{
    date: 5/23/2023,
    userId: 'drake',
    postTitle: 'I wish i was jamaican',
    postBody: `Now I got a house in LA Now I got a bigger pool than Ye And look man, Ye's pool is nice Mine's just big is what I'm saying`,
    postTag: 'default',
    numLikes: 1,
  },
  {
  date: 5/23/2023,
  userId: 'wayne',
  postTitle: 'I wish i was french',
  postBody: `just testing this`,
  postTag: 'default',
  numLikes: 1,
}]
 
  

  function getPosts () {
    fetch('/')
    .then(response => response.json())
    .then(posts => {
      
      for (let i = 0; i < posts.length; i++) {
          dispatch(setAllPosts(
            [<div>
              <h1>{posts[i].postTitle}</h1>
              <p>{posts[i].postBody}</p>
              <div>{posts[i].postTag}</div>
              <div>{posts[i].numLikes}</div>
              <div>{posts[i].numComments}</div>
            </div>]
          ))
      }
      
    })
    .catch(err => {
      console.log('There was an error loading posts', err)
    })
  }


  function mockGet (mockData) {
    for (let i = 0; i < mockData.length; i++) {
        dispatch(setAllPosts(
          [<div>
            <h1>{mockData[i].postTitle}</h1>
            <p>{mockData[i].postBody}</p>
            <div>{mockData[i].postTag}</div>
            <div>{mockData[i].numLikes}</div>
          </div> ]
        ))
      
     
    }
   
  }

    return (
        <div>
         <i class="fa-solid fa-otter otterLogo"></i>
          
          <div>
            
            <div>
              <label htmlFor="userId">Username</label>
              <input type="text" id="username"/>
            </div>
      
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password"/>
            </div>
          </div>
          {errorMessage}
          <div>
              <button onClick={() => {
                mockLogin(document.querySelector('#username').value, document.querySelector('#password').value)
                mockGet(mockData)
              }}>Login</button>
          </div>
      
          <div>
            <p>Not A Member?</p>
            <Link to='/signuppage'><button>Sign up</button></Link>            
          </div>
          
        </div>
       )
}


export default loginPage;