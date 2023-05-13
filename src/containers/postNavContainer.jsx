import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './store/userReducer';

function postNavContainer() {
   return (
    <div>
        {/* <img></img>   will be the logo */}
    </div>
   )
}

export default postNavContainer;