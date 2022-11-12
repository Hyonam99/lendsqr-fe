import React from "react"
import { FiSearch } from "react-icons/fi";


const searchInput = () => {
  return(
    <div className="search-bar-holder">
      <input type="text" placeholder="search users..." name="search-bar" className="search-bar" id='search-bar-id' />
      <span className="search-bar-icon"> <FiSearch className="search-icon"/> </span>
    </div>
  )
}

export default searchInput