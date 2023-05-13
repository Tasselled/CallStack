import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './store/userReducer';
import postBodyContainer from '../containers/postBodyContainer';
import postNavContainer from '../containers/postNavContainer';

function loginPage(){
    return (
        <div>
          <div>
            <img src="" alt="logo" />
          </div>
          
          <div>
            
            <div>
              <label htmlFor="userId">ID</label>
              <input  type="text" id="userId"/>
            </div>
      
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password"/>
            </div>
          </div>
      
          <div>
              <button>Login</button>
          </div>
      
          <div>
            <p>Not A Member?</p>
            <button>Sign up</button>
          </div>
          
        </div>
       )
}


export default loginPage;