import lendsqr from './lendsqr.svg';
import logo from './Union.svg';
import './style.css';

function Logo() {
  return (
    <main className="App">
      <header className="App-header">
      <img src={logo} className="mini-logo" alt="logo" />
        <img src={lendsqr} className="main-logo" alt="logo" />
      </header>
      </main>

  );
}

export default Logo;