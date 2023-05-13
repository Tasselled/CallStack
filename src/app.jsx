import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './store/userReducer';


function App() {

    // return (
    //     <Routes>
    //         <Route path='/' element={Login Page}/>
    //         <Route path='/api' element={Main container}/>
    //     </Routes>
    // );
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