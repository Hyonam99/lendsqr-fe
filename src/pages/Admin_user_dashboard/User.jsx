import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from "swiper";

const User = ({inW, inH}) => {

  
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
}}
navigation={inW < 970 ? true : false}
modules={[Grid, Pagination, Navigation, Autoplay]}

>

<SwiperSlide>
        <div className="summary-card">
          <img src="" alt="" />
          <p>Users</p>
          <p>100</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="summary-card">
        <img src="" alt="" />
          <p>Users</p>
          <p>200</p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="summary-card">
        <img src="" alt="" />
          <p>Users</p>
          <p>300</p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="summary-card">
        <img src="" alt="" />
          <p>Users</p>
          <p>400</p>
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
              <tr>
                <td>Okamioahng</td>
                <td>Nairobi</td>
                <td>okami@mail.com</td>
                <td>0812457845</td>
                <td>Tue, Oct-22-2007</td>
                <td>Active</td>
                <td>view</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  )
}

export default User


{/* <div className="user-display-summary"> */}





