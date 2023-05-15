import React from "react";
import MainPageNavBar from "../components/MainPageNavBar";
import PostBar from "../components/postBar";
import SubContainer from "../containers/subContainer";

function MainPage () {
  // Using react hooks to to fetch data from database on page load up
  
  
  return (
    <div>
       <MainPageNavBar />
       <PostBar />
       <SubContainer  />
    </div>
    
   
    
  );
};

export default MainPage