import React from 'react';

export default function FooterFooter() {
  return (
    <div className='footerFooter'>
      <p className='bottomBottom'>© 2023 Tasselled, Inc.</p>
      <p className='bottomBottom'>
        Build with <span className='bottomHeart'>♥</span> by Sooji, Praise, Evram, Hunter, and Kevin
      </p>
      <div className='bottomBottom'>
        <a
          onClick={() => {
            window.location.href = 'https://github.com/sjk06';
          }}>
          <i className='fa-brands fa-github githubLogo sjk06'></i>
        </a>
        <a
          onClick={() => {
            window.location.href = 'https://github.com/praisepelumi';
          }}>
          <i className='fa-brands fa-github githubLogo praisepelumi'></i>
        </a>
        <a
          onClick={() => {
            window.location.href = 'https://github.com/evramdawd';
          }}>
          <i className='fa-brands fa-github githubLogo evramdawd'></i>
        </a>
        <a
          onClick={() => {
            window.location.href = 'https://github.com/HShaw215';
          }}>
          <i className='fa-brands fa-github githubLogo HShaw215'></i>
        </a>
        <a
          onClick={() => {
            window.location.href = 'https://github.com/kfan1';
          }}>
          <i className='fa-brands fa-github githubLogo kfan1'></i>
        </a>
      </div>
    </div>
  );
}
