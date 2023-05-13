import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './store/userReducer';

function postText() {
    return (
        <div>
          {/* this will be where the post body is pulled from the server and displayed */}
        </div>
       )
}


export default postText;