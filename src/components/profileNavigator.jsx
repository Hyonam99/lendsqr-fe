import React from "react"

const profileNavigator = ({className}) => {
  
  return(
   
      <div className={!className ? 'Notification' : className}>
        <p>notify</p>
        <p>Icon</p>
        <p>Image</p>
      </div>
      
  )
}

export default profileNavigator