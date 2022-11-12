import React from 'react'
import '../../scss/style.css'
import LoginForm from './LoginForm'
import LoginIntro from './LoginIntro'

const MainAuth = () => {
  return (
    <section className='mainauth-parent-container'>

      <section className='mainauth-main-container'>

        <div className="mainauth-intro">
        <LoginIntro />
        </div>

        <div className="mainauth-form">
          <LoginForm />
        </div>

      </section>   

    </section>
  )
}

export default MainAuth