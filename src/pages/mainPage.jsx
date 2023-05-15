import React from "react";




import '../stylesheets/mainPageStyles.scss';
import MainPageNavBar from "../components/MainPageNavBar";
import PostBar from "../components/postBar";
import SubContainer from "../containers/subContainer";

function MainPage () {
  return (
    <div>
       <MainPageNavBar />
       <PostBar />
       <SubContainer  />
    </div>
    
   
    
  );
};

export default MainPage