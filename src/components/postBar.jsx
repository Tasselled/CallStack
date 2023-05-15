import React from "react";
import TagDropDownButton from "./TagDropDownButton";
import TagLinks from "./tagLinks";

function PostBar ({}) {
  function makePost () {
    
  }
  return (
    <div>
      <div>
        <img src="" alt="user-profile-photo" />
      </div>
      
      <div>
        <input type="text" placeholder="Enter a title" className="postTitle"/>
        <input type="text" placeholder="Enter your post" className="postBody"/>

        <div className="dropdown tagDiv">
          <TagDropDownButton tagLink='Tag'/>
          <TagLinks />
        </div>
        
        <button type="submit">Post</button>
      </div>
        
    </div>
  )
    
   
}

export default PostBar;