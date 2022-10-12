import React from 'react'
import Dashboard_header from './DashboardHeader'
import Dashboard_sidebar from "./DashboardSidebar";
import User_profile from './UserProfile'
import Backicon from './image_icons_asset/goback.svg'
import './style.css'

function Fulldetails(){
  return(
    <div>
      <section className="User-dashboard">
     <section className="Dash-header">
        <Dashboard_header />
      </section>
      <section className="Dash-sidebar">
        <Dashboard_sidebar />
      </section>
      <section className="profile-analytics">
        <p><img src={Backicon}/> Go back</p>
        <section className='user-actions'>
        <h4>Users</h4>
        <section className='user-buttons'>
        <button className='red-color'>BLACKLIST USER</button>
        <button>ACTIVATE USER</button>
        </section>

        </section>
        <User_profile />
       </section>
       </section>

    </div>
  );
}

export default Fulldetails