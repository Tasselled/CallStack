import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../stylesheets/postPageStyles.scss'

function PostNavContainer() {
   return (
    <div class="postNav">
        {/* <img></img>   will be the logo */}
        <i class='fa-solid fa-otter otterLogo'></i>
    </div>
   )
}

export default PostNavContainer;