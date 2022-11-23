import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { convertDate } from '../../utilityFunctions';


import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from "swiper";
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Dashboard = ({inW, allLoanUsers}) => {
  
const [dbUsers, setDbUsers] = useState(allLoanUsers);

const dashBoardUsers = dbUsers.map((singleUser) => 
<tr>
                <td>{singleUser.name.first} {singleUser.name.last}</td>
                <td>{singleUser.location.country}</td>
                <td>{singleUser.email}</td>
                <td>{singleUser.phone}</td>
                <td>{convertDate(singleUser.registered.date)}</td>
                <td><span className={singleUser.registered.age >= 10 ? 'inactive' : 'active'}>{singleUser.registered.age >= 10 ? 'Inactive' : 'Active'}</span></td>
                <td><Link>view</Link></td>
              </tr>
)
const activeUsers = dbUsers.filter((activeUser) => activeUser.registered.age <= 10 )
useEffect(()=>{
  console.log(allLoanUsers)
}, [])
  
  return (

    <section>
      
      <Swiper
slidesPerView={inW < 600 ? 1 : inW < 970 ? 2 : 4}
grid={{
  rows: 1,
}}
spaceBetween={0}
pagination={{clickable: inW < 970 ? true : false,}}
loop={inW < 970 ? true : false}
autoplay={{
  delay: 3000,
  disableOnInteraction: false,        
}}
navigation={inW < 970 ? true : false}
modules={[Grid, Pagination, Navigation, Autoplay]}

>

<SwiperSlide>
        <div className="summary-card">
          <img src="" alt="" />
          <p>Users</p>
          <p>{dbUsers.length}</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="summary-card">
        <img src="" alt="" />
          <p>Active Users</p>
          <p>{activeUsers.length}</p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="summary-card">
        <img src="" alt="" />
          <p>Users With Loans</p>
          <p>{dbUsers.length}</p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="summary-card">
        <img src="" alt="" />
          <p>Users With Savings</p>
          <p>{dbUsers.length}</p>
        </div>
        </SwiperSlide>

        </Swiper>
        

      <div className="user-display-table">
        <div className="table-parent-container">
          <table>
            <thead>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Date Joined</th>
                <th>Status</th>
                <th>Action</th>
            </thead>

            <tbody>
              {dashBoardUsers}
              
            </tbody>
          </table>
        </div>
        
      </div>
     
    </section>

  )
}

export default Dashboard


{/* <div className="user-display-summary"> */}





