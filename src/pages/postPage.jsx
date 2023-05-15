import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostBodyContainer from "../containers/postBodyContainer";
import PostNavContainer from "../containers/postNavContainer";

function postPage() {
  return (
    <div className="post">
      <PostNavContainer />
      <PostBodyContainer />
    </div>
  );
}

export default postPage;
