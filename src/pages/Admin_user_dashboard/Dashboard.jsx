import React from 'react'
import ReactPaginate from 'react-paginate';

import Users from '../../icons_asset/users.svg'
import AUsers from '../../icons_asset/active-users.svg'
import Loans from '../../icons_asset/loans-icon.svg'
import Savings from '../../icons_asset/loans-savings.svg'
import { FaCaretRight } from "react-icons/fa"
import { FaCaretLeft } from "react-icons/fa"

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
import UserProfile from '../User_dashboard/UserProfile';


const Dashboard = ({inW, allLoanUsers}) => {

const iconstyle = { fontSize: "24px", cursor: "pointer" };
  
const [dbUsers, setDbUsers] = useState(allLoanUsers);
const [seeUser, setSeeUser] = useState(false);
const [moveUser, setMoveUser] = useState({})  
const [pageNumber, setPageNumber] = useState(0)
const userPerPage = 5
const pageVisited = pageNumber * userPerPage

  const viewUser=(singleUser)=>{
    setMoveUser(singleUser)
    setSeeUser(true)
  }



const dashBoardUsers = dbUsers.slice(pageVisited, pageVisited + userPerPage).map((singleUser) => 
<tr>
                <td>{singleUser.name.first} {singleUser.name.last}</td>
                <td>{singleUser.location.country}</td>
                <td>{singleUser.email}</td>
                <td>{singleUser.phone}</td>
                <td>{convertDate(singleUser.registered.date)}</td>
                <td><span className={singleUser.registered.age >= 10 ? 'inactive' : 'active'}>{singleUser.registered.age >= 10 ? 'Inactive' : 'Active'}</span></td>
                <td><Link onClick={()=>{viewUser(singleUser)}}>view</Link></td>
              </tr>
)
const activeUsers = dbUsers.filter((activeUser) => activeUser.registered.age <= 10 )

const pageCount = Math.ceil(dbUsers.length / userPerPage)

const changePage = ({selected}) => {
    setPageNumber(selected)
}

  
  return (
    <>
{seeUser ?   <UserProfile theUser={moveUser} goBack={setSeeUser}/> :
   
    <section>
      <Swiper
slidesPerView={inW < 600 ? 1 : inW < 1200 ? 2 : 4}
grid={{
  rows: 1,
}}
spaceBetween={0}
pagination={{clickable: inW < 1200 ? true : false,}}
loop={inW < 970 ? true : false}
autoplay={{
  delay: 3000,
  disableOnInteraction: false,        
}}
navigation={inW < 970 ? true : false}
modules={[Grid, Pagination, Navigation, Autoplay]}

>

<SwiperSlide>
        <div className="summary-card plain-user">
          <img src={Users} alt="" />
          <p className='user-type'>Users</p>
          <p>{dbUsers.length}</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="summary-card active-user">
        <img src={AUsers} alt="" />
          <p className='user-type'>Active Users</p>
          <p>{activeUsers.length}</p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="summary-card loan-user">
        <img src={Loans} alt="" />
          <p className='user-type'>Users With Loans</p>
          <p>{dbUsers.length}</p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="summary-card savings-user">
        <img src={Savings} alt="" />
          <p className='user-type'>Users With Savings</p>
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

      <section className="table-pagination">
          <ReactPaginate 
        breakLabel="..."
        nextLabel= {<FaCaretRight style={iconstyle} />}
        previousLabel= {<FaCaretLeft style={iconstyle} />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginateButtons'}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        previousLinkClassName={'prevButton'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'disabledButton'}
        activeClassName={'activeButton'}
        renderOnZeroPageCount={null}
        />
        </section>
    </section> 
       
       
}


     </>
  )
}

export default Dashboard






