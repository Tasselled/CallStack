import React from "react";
import GithubOAuth from "../components/githubOAuth";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser, setErrorMessage } from "../store/userReducer";
import { useSelector, useDispatch } from "react-redux";



function SignUpPage () {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.userReducer.errorMessage); 

  const navigate = useNavigate();

  function signUpUser (firstName, lastName, username, password) {
    if (!firstName || !lastName || !username || !password) {
      dispatch(setErrorMessage(<p>You have incompleted fields, please complete form</p>))
    } else {
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password,
        }),
      })
      .then(() => {
        dispatch(setCurrentUser(username))
        navigate(`/${username}`)
      })
    }

  }

  
 return (
  <div>
    <div>
      <img src="" alt="logo" />
    </div>
    
    <div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" />
      </div>
      
      <div>
        <label htmlFor="username">username</label>
        <input  type="text" id="username"/>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>
      </div>
    </div>
    {errorMessage}
    <div>
        <button onClick={() => {
          signUpUser(document.querySelector('#firstName').value, 
          document.querySelector('#lastName').value,
          document.querySelector('#username').value,
          document.querySelector('#password').value)
        }}>Sign Up</button>
    </div>

    <GithubOAuth/>

    <div>
      <p>Already a member?</p>
      <Link to='/loginpage'><button>Login</button></Link>
    </div>

  </div>
 )
}

export default SignUpPage;