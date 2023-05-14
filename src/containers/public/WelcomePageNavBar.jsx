import React from 'react';
import { Link } from 'react-router-dom';
import DropdownLinks from './DropdownLinks';
import DropdownButton from './DropdownButton';

export default function WelcomePageNavBar() {
  return (
    <div className='publicNavBar'>
      <div className='navBarDiv leftSideNavBar'>
        <Link className='publicNavBarLink' to='/'>
          <i className='fa-solid fa-otter otterLogo'></i>
        </Link>
        <div class='dropdown publicNavBarDropdown'>
          <DropdownButton dropDownLink='About' />
          <DropdownLinks />
        </div>
        <div class='dropdown publicNavBarDropdown'>
          <DropdownButton dropDownLink='Solutions' />
          <DropdownLinks />
        </div>
        <div class='dropdown publicNavBarDropdown'>
          <DropdownButton dropDownLink='Open Source' />
          <DropdownLinks />
        </div>
        <button className='publicNavBarLink' type='button'>
          Pricing
        </button>
      </div>
      <div className='navBarDiv rightSideNavBar'>
        <input className='publicNavBarSearch' placeholder='Search CallStack' />
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
