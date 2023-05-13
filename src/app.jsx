import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './store/userReducer';


function App() {
  const username = useSelector(state=> state.userReducer.currentUser)
  const dispatch = useDispatch();

  function creatUser(newUser) {
    dispatch(currentUser(newUser))
    fetch("sending to server to store new user in DB")
  }

    return (
      <div>{username}
      <button onClick={()=>{createHashRouter('kevin')}}>click me</button>
      </div>

        // <Routes>
        //     <Route path='/' element={}/>
        // </Routes>
    );
}


export default App