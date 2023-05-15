import React from "react";

function MainPageNavBar () {

  function searchForPost (text) {
    
  }

  return (
    <div className="mainPageNavBar">
      <i class="fa-solid fa-otter otterLogo"></i>
      
      <div className="mainPageSearchBar">
        <input type="text" placeholder="Searching for something?" className="mainPageSearchField"/>
        <button className="mainPageSearchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default MainPageNavBar;