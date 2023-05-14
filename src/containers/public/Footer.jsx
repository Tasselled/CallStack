import React from 'react';

export default function Footer() {
  return (
    <div className='publicFooter'>      
      <div className='footerTableColOne'>
      <i className='fa-solid fa-otter otterLogo'></i>
        <a onClick={()=>{window.location.href='https://github.com/Tasselled/CallStack'}}><i className="fa-brands fa-github githubLogo"></i></a>        
        <h1>CallStack</h1>
        <h3>Subscribe to our newsletter</h3>
        <p>Get product updates, company news, and more</p>
        <button className='subscribeButton'>Subscribe</button>
      </div>
      <div className='footerTableCol'>
        <h2>Product</h2>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
      </div>
      <div className='footerTableCol'>
        <h2>Platform</h2>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
      </div>
      <div className='footerTableCol'>
        <h2>Support</h2>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
      </div>
      <div className='footerTableCol'>
        <h2>Company</h2>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
        <p className='footerLink'>Features</p>
      </div>
    </div>    
  );
}
