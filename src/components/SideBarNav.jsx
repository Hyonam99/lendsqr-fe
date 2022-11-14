import React from 'react'
import {Link} from 'react-router-dom'
import { HiUsers } from "react-icons/hi";
import { HiChartPie } from "react-icons/hi";
import { HiCube } from "react-icons/hi";


const SideBarNav = ({showUser, showAnalysis, showProduct}) => {
  

  return (
    <section className="side-bar-main-navigation">
        <div className="sub-section organization">
        <p>Dashboard</p>
        </div>

        <div className="sub-section users">
        <Link onClick={()=> {showAnalysis(false); showProduct(false); showUser(true)}}><HiUsers/>users</Link>
        </div>

        <div className="sub-section analysis">
        <Link onClick={()=> {showUser(false); showProduct(false); showAnalysis(true)}}><HiChartPie/>analysis</Link>
        </div>

        <div className="sub-section products">
        <Link onClick={()=> {showUser(false); showAnalysis(false); showProduct(true)}}><HiCube/>products</Link>
        </div>

    </section>
    
  )
}

export default SideBarNav