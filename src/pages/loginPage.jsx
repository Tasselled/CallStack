import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'; // specifically for rerouting you
import { useDispatch, useSelector } from 'react-redux'; // react redux hooks 

// redux action creators which we send in our dispatch.they take in the payload
// PS: we gave our types and action creators the same name. 
import { setErrorMessage, setCurrentUser } from '../store/userReducer'; 

function loginPage(){
  const dispatch = useDispatch() // the useDispatch is a react redux hook that lets us use our dispatch function in redux
  const errorMessage = useSelector(state=>state.userReducer.errorMessage) // useSelector lets us access state properties
  /* use navigate is a react hook that allows us to navigate to other pages, similar to our <Link></Link>. 
  but link is a react component that we wrap around a button */
  const navigate = useNavigate() 

  function loginUser(username, password) {
    fetch(`/login/${username}/${password}`).then((res) => {
      res.json()
    }).then((res) => {
      if(res.body){ 
        dispatch(setErrorMessage([]))
        dispatch(setCurrentUser(username));
        navigate(`/${username}`)
      }
      else {
        dispatch(setErrorMessage([<p>incorrect username/password</p>]))
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

    return (
        <div>
          <div>
            <img src="" alt="logo" />
          </div>
          
          <div>
            
            <div>
              <label htmlFor="userId">ID</label>
              <input type="text" id="userId"/>
            </div>
      
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password"/>
            </div>
          </div>
          {errorMessage}
          <div>
              <button onClick={() => {
                mockLogin(document.querySelector('#userId').value, document.querySelector('#password').value)
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