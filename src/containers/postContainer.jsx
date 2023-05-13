import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import postTitle from '../components/postTitle';
import postText from '../components/postText';


function postContainer() {
    <div>
        {/* <img></img>  will be users image that we have to pull from server*/}
        <postTitle />
        <postText />
    </div>
}

export default postContainer;