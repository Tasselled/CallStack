import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './store/userReducer';
import postBodyContainer from '../containers/postBodyContainer';
import postNavContainer from '../containers/postNavContainer';

function postPage(){
    return (
        <div>
            <postNavContainer />
            <postBodyContainer />
        </div>
    )
}


export default postPage;