import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './store/userReducer';
import postContainer from './postContainer';
import commentInput from '../components/commentInput';


//this will be where we impliment a for loop to figure out how many elements need to get rendered for comments
let comments = []
//for (let i = 0; i < fetchedComments.length; i++){
    // /<Comment />
// }

function postBodyContainer() {
    <div>
        <postBody />
        {comments}
        <commentInput />
    </div>
}

export default postBodyContainer;