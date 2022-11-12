import React from 'react'
import Logo from "./Logo";
import SearchInput from "./searchInput";
import ProfileNavigator from "./profileNavigator";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import {useState} from 'react'

const Navbar = () => {
  const [ham, setHam] = useState(true)

  return (
    <section className={ham ? "admin-navigation-header-close" : "admin-navigation-header"}>
          <section className="admin-navigation">
          <div className="navBar-dual-content"> <Logo /> <SearchInput /></div> <FiAlignRight onClick={() => {setHam(false)}} className={ham ? "showMenu" : 'closeMenu'}/><FiX onClick={() => {setHam(true)}} className={!ham ? "showMenu" : 'closeMenu'}/>
          </section>
          <ProfileNavigator className={ham ? 'Notification' : 'NotifyMobile'}/>
        </section>
  )
}

export default Navbar