import React from "react";
import PostedDiv from "../components/postedDiv";





function SubContainer () {
  const allPosts = useSelector(state=>state.userReducer.allPosts);
  return (
    <div>
      {allPosts}
    </div>
    
    
  )
}

export default SubContainer;