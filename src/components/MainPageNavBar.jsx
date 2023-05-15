import React from "react";
import SearchBar from "./SearchBar";

function MainPageNavBar() {
  function searchForPost(text) {}

  return (
    <div className="mainPageNavBar">
      <i class="fa-solid fa-otter otterLogo"></i>

      <SearchBar />
    </div>
  );
}

export default MainPageNavBar;
