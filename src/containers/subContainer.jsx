import React from "react";
import { useDispatch, useSelector } from "react-redux";






function SubContainer () {

  const allPosts = useSelector(state=>state.userReducer.allPosts);
  return (
    <div>
      {allPosts}
    </div>
    
    
  )
}

export default SubContainer;