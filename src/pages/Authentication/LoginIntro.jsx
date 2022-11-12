import React from 'react'
import Logo from '../../components/Logo'
import PabloImage from '../../images_asset/pablo.svg'

const LoginIntro = () => {
  return (
    <section className='login-intro-main-section'>
      <div className="logo-intro">
        <Logo />
      </div>

      <div className="Login-image-holder">
        <img src={PabloImage} />
      </div>

      <div className="login-intro-getHelp-holder">
      <span className="login-intro-getHelp">
        <h4>Chat</h4>
        </span>
      </div>
      
    </section>
  )
}

export default LoginIntro