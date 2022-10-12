import React from 'react'
import './style.css';

/************* This section below is to import all the neccesary icons for the side navigation bar ************/

/* Home icon*/                              /* multiple users icon*/ 
import { FaHome } from 'react-icons/fa';   import { FaUsers } from 'react-icons/fa';

/* Handshake icon*/                                /* Breifcase icon*/ 
import { FaRegHandshake } from 'react-icons/fa';   import { FaBriefcase } from 'react-icons/fa'; 

/* Money icon*/                                       /* Bar chart icon*/ 
import { FaRegMoneyBillAlt } from 'react-icons/fa';   import { IoBarChartSharp } from "react-icons/io5";

/* Single user icon*/                          /* User checked icon*/ 
import { FaUserAlt } from 'react-icons/fa';   import { FaUserCheck } from 'react-icons/fa'; 

/* Piggy bank icon*/                             /* House building icon*/ 
import { FaPiggyBank } from 'react-icons/fa';   import { FaBuilding } from 'react-icons/fa';  

/* Audit icon*/                             /* House building icon*/ 
import { FaNewspaper } from 'react-icons/fa';   import { IoSettingsSharp } from "react-icons/io5";


import { HiLogout } from "react-icons/hi";

/***************************************************************************************************************/


function Dsidebar(){
  return(
      <div className='all-content'>
          <section className='switch'>
            <p> <FaBriefcase /> Switch Organization</p>
          </section>
          <section className='dash_intro'>
            <p> <FaHome /> Dashboard</p>
          </section>

        <ul className="customer">
        <li>CUSTOMERS</li>
        <li> <FaUserAlt /> Users</li>
        <li> <FaUsers /> Guarantors</li>
        <li> <FaRegMoneyBillAlt /> Loans</li>
        <li> <FaRegHandshake /> Decision models</li>
        <li> <FaPiggyBank /> Savings</li>
        <li> <FaRegMoneyBillAlt /> Loan request</li>
        <li> <FaUserCheck /> Whitelist</li>
        <li> <FaUserCheck /> Karms</li>
        
        </ul>
  
        <ul className="business">
        <li>BUSINESS</li>
        <li> <FaBuilding /> Organization</li>
        <li> <FaRegMoneyBillAlt /> Loan products</li>
        <li> <FaRegMoneyBillAlt /> Savings products</li>
        <li> <FaRegMoneyBillAlt /> Fees and charges</li>
        <li> <FaRegMoneyBillAlt /> Transactions</li>
        <li> <FaRegMoneyBillAlt /> Services</li>
        <li> <FaRegMoneyBillAlt /> Service Account</li>
        <li> <FaRegMoneyBillAlt /> Settlement</li>
        <li> <IoBarChartSharp /> Reports</li>
        </ul>

        
        <ul className="settings">
        <li>SETTINGS</li>
        <li> <IoSettingsSharp /> Preferences</li>
        <li> <FaRegMoneyBillAlt /> Fees and Pricing</li>
        <li> <FaNewspaper /> Audit logs</li>
        <li> <FaNewspaper /> System messages</li>
        </ul>

        <section className='logout'>
            <p> <HiLogout /> Logout</p>
          </section>
      </div>
    
  );
}

export default Dsidebar