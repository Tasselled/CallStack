import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './store/userReducer';
import MainPage from './pages/mainPage'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'
import PostPage from './pages/postPage'
import WelcomePage from './pages/WelcomePage';


function App() {
    const currentUser = useSelector(state => state.userReducer.currentUser)
    const currentPost = useSelector(state => state.userReducer.currentPost)

    // if sesssion id cookie exists in database, set currentUser to username
    // navigate to /currentUser
    
        return (
            <Routes>
                <Route path={`/${currentUser}/${currentPost}`} element={<PostPage />}/>
                <Route path={`/${currentUser}`} element={<MainPage />}/>                
                <Route path='/signuppage' element={<SignUpPage />}/>
                <Route path='/loginpage' element={<LoginPage />}/>
                <Route path='/' element={<WelcomePage />}/>
                
            </Routes>
        );
 }

//   const username = useSelector(state=> state.userReducer.currentUser)
//   const dispatch = useDispatch();

//   function creatUser(newUser) {
//     dispatch(currentUser(newUser))
//     fetch("sending to server to store new user in DB")
//   }

    //   <div>{username}
    //   <button onClick={()=>{createHashRouter('kevin')}}>click me</button>
    //   </div>

export default App