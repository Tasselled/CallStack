import React from 'react';
import { useDispatch } from 'react-redux';
import { setTags } from '../store/userReducer';

export default function SearchTags() {
  const dispatch = useDispatch();
  return (
    <div className='dropdown'>
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        id=''
        data-bs-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='true'>
        Tags
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
        <li>
          <a
            className='dropdown-item'
            onClick={() => {
              dispatch(setTags('Javascript'));
              if(document.querySelector('#JSCheck').style.display === 'none') document.querySelector('#JSCheck').style = 'display: inline-block';
              else document.querySelector('#JSCheck').style.display ='none'
            }}>
            Javascript <i className='fa-solid fa-check' id='JSCheck' style={{ display: 'none' }}></i>
          </a>
        </li>
        <li>
          <a
            className='dropdown-item'
            onClick={() => {
              dispatch(setTags('React'));
              if(document.querySelector('#reactCheck').style.display === 'none') document.querySelector('#reactCheck').style = 'display: inline-block';
              else document.querySelector('#reactCheck').style.display ='none'
            }}>
            React <i className='fa-solid fa-check' id='reactCheck' style={{ display: 'none' }}></i>
          </a>
        </li>

        <li>
          <a
            className='dropdown-item'
            onClick={() => {
              dispatch(setTags('Redux'));
              if(document.querySelector('#reduxCheck').style.display === 'none') document.querySelector('#reduxCheck').style = 'display: inline-block';
              else document.querySelector('#reduxCheck').style.display ='none'
            }}>
            Redux <i className='fa-solid fa-check' id='reduxCheck' style={{ display: 'none' }}></i>
          </a>
        </li>
        <li>
          <a
            className='dropdown-item'
            onClick={() => {
              dispatch(setTags('Express'));
              if(document.querySelector('#expressCheck').style.display === 'none') document.querySelector('#expressCheck').style = 'display: inline-block';
              else document.querySelector('#expressCheck').style.display ='none'
            }}>
            Express <i className='fa-solid fa-check' id='expressCheck' style={{ display: 'none' }}></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
