import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="main-form">
      <section className="form-section">
<section className="form-intro">
    <h2>Welcome !</h2>
    <p>Enter details to login</p>
    </section>

    <div className="login-form">
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='Password'/>
      <p>Forgot password ? <span>Sign in</span></p>
      <Link to="/Dashboard"><button className='btn' type='button'>LOG IN</button></Link>
    </div>
  </section>
  </div>
  );
}

export default App;
