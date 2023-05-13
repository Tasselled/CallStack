import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './store/userReducer';

function comment() {
    return (
        <div>
          {/* <img></img>   Commenter's profile picture */}
          {/* <span> user's name will be displayed here /<span>*/}
          {/* this will be whatever the pulled comment is displayed in a <p></p> */}
        </div>
       )
}


export default comment;