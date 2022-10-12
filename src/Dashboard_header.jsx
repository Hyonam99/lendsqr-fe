import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
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
        {/* <FontAwesomeIcon icon={regular('coffee')} /> */}
        </span>
        </div>
        <div className="quick-access">
          <p><a href='#'>Docs</a></p>

          <img src="" alt="profile-picture" /> 
          <span>Profile name</span>
        </div>

      </nav>
  );

}

export default Dheader