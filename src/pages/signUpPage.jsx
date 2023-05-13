import React from "react";

function SignUpPage () {

 return (
  <div>
    <div>
      <img src="" alt="logo" />
    </div>
    
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>
      </div>
      
      <div>
        <label htmlFor="userId">ID</label>
        <input  type="text" id="userId"/>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"/>
      </div>
    </div>

    <div>
        <button>Sign Up</button>
    </div>

    <div>
      <p>Already a member?</p>
      <button>Login</button>
    </div>

  </div>
 )
}

export default SignUpPage;