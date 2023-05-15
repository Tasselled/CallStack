import React from "react";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { setAllPosts } from "../store/userReducer";

import '../stylesheets/mainPageStyles.scss';
import MainPageNavBar from "../components/MainPageNavBar";
import PostBar from "../components/postBar";
import SubContainer from "../containers/subContainer";

function MainPage () {
  const mockData = {
    date: 5/23/2023,
    userId: 'drake',
    postTitle: 'I wish i was jamaican',
    postBody: `Now I got a house in LA Now I got a bigger pool than Ye And look man, Ye's pool is nice Mine's just big is what I'm saying`,
    postTag: 'default',
    numLikes: 1,
  }
  const dispatch = useDispatch();
  

  function getPosts () {
    fetch('/')
    .then(response => response.json())
    .then(posts => {
      dispatch(setAllPosts([posts]));
    })
    .catch(err => {
      console.log('There was an error loading posts', err)
    })

 
  }
  function mockGet () {
    dispatch(setAllPosts([mockData]));
    console.log(useSelector(state=>state.userReducer.allPosts))
  }
  mockGet()
 
  return (
    <div>
       <MainPageNavBar />
       <PostBar />
       <SubContainer  />
    </div>
    
   
    
  );
};

export default MainPage