import React from "react";

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="introductionIntro">Introducing CallStack</div>
      <div className="introductionText">
        Created by developers for developers. A community for{" "}
        <span id="everyoneText">everyone</span> who{" "}
        <button
          id="heartText"
          onClick={() => {
            document.querySelector("#heartText").style = "color:red";
          }}
        >
          ♥
        </button>{" "}
        code. <span id="learnText">Learn</span> together,{" "}
        <span id="growText">grow</span> together.
      </div>
    </div>
  );
}
