import lendsqr from './lendsqr.svg';
import logo from './Union.svg';
import './style.css';
import { Link } from 'react-router-dom'

function Logo() {
  return (
    
    <Link to='/'>
    <header className="App-header">
      <img src={logo} className="mini-logo" alt="logo" />
        <img src={lendsqr} className="main-logo" alt="logo" />
      </header>
      </Link>

  );
}

export default Logo;