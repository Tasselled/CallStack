import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePageNavBar() {
  return (
    <div className='publicNavBar'>
      <div className='navBarDiv leftSideNavBar'>
        <Link className='publicNavBarLink' to='/'>
          <i className='fa-solid fa-otter otterLogo'></i>
        </Link>
        <Link className='publicNavBarLink'>About</Link>
        <Link className='publicNavBarLink'>Solutions</Link>
        <Link className='publicNavBarLink'>Open Source</Link>
        <Link className='publicNavBarLink'>Pricing</Link>
      </div>
      <div className='navBarDiv rightSideNavBar'>
        <input className='publicNavBarSearch' placeholder='Search CallStack'/>
        <Link className='publicNavBarLink' to='/loginpage'>
          Sign In
        </Link>
        <Link className='publicNavBarLink publicSignupButton' to='/signuppage'>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
