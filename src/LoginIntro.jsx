import lendsqr from './lendsqr.svg';
import logo from './Union.svg';
import pabloImage from './pablo-sign-in 1.svg';
import './style.css';

function App() {
  return (
    <main className="top">
      <header className="App-header">
      <img src={logo} className="mini-logo" alt="logo" />
        <img src={lendsqr} className="main-logo" alt="logo" />
      </header>

      <img src={pabloImage} className="App-intro" alt="logo" />

      <div className="contact">
        <section className='get-help'>get help</section>
        <section className='chat'>chat us</section>
      
    </div>
      </main>

  );
}

export default App;
