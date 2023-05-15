import React from "react";

export default function GithubOAuth() {
  const GITHUB_URL = "https://github.com/login/oauth/authorize";
  const CLIENT_ID = "e889341eeb43ae362fa6";
  const REDIRECT_URL = "http://localhost:8080/api/oauth";

  function fetchGHOAuth() {
    window.location.href = `${GITHUB_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`;
  }

  return <button onClick={fetchGHOAuth}>Github OAuth</button>;
}
