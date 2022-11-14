import React from "react"
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineNotifications } from "react-icons/md";
import {Link} from 'react-router-dom'

const profileNavigator = ({className}) => {
  
  return(
   
      <div className={!className ? 'Notification' : className}>
         <Link>Docs</Link>
        <p><MdOutlineNotifications/></p>
        <p><HiOutlineUserCircle/></p>
      </div>
      
  )
}

export default profileNavigator