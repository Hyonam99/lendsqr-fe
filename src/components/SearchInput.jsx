import React, {useContext} from "react"
import { FiSearch } from "react-icons/fi";
import { AdminContext } from "../Contexts/AdminContext";

const SearchInput = () => {

  const {setSearchValue} = useContext(AdminContext);

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return(
    <div className="search-bar-holder">
      <input type="text" placeholder="search users..." name="search-bar" className="search-bar" id='search-bar-id' onChange={(e) => handleChange(e)} />
      <span className="search-bar-icon"> <FiSearch className="search-icon"/> </span>
    </div>
  )
}

export default SearchInput