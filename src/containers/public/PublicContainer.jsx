import React from 'react';
import Introduction from './Introduction';

export default function PublicContainer() {
  return (
    <div className='mainPublicContainer'>
      <img className='publicBackground' src='https://wallpaperaccess.com/full/1145359.png' />
      <div class='lineSVG'></div>
      <Introduction />
    </div>
  );
}
