import React from 'react'

import Logo from './Logo';
import './style.css';

function Dheader(){
  return (
    <nav>
  <div className="logo-pin">
        <Logo />
        </div>
  <div className="search-box">
        <input type='search' placeholder='search for anything' />
        <span className='search-icon'>
        </span>
        </div>
        <div className="quick-access">
          <p><a href='#'>Docs</a></p>

          <img src="" alt="profile-picture" /> 
          <span>Bassey Hyonam</span>
        </div>

      </nav>
  );

}

export default Dheader