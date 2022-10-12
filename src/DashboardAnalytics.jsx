import React from "react";
import { useEffect, useState } from "react";
import DataList from './DataList'
import "./style.css";



function Danalytics() {

  const [blogs, setBlogs] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/ ")
    .then((response) => {
      if(!response.ok){
          throw Error('could not fetch data from resource')
      }
      return response.json()})
    .then(data => {setBlogs(data)
      localStorage.setItem('allUsers', JSON.stringify(data))
      setPending(false)
      setError(null)
    })
    .catch((error) => {setError(error.message);})
    setPending(false)
  }, [])

  return (
    <div>
      {error && <div> { error } </div>}
      {pending && <div>Fetching data from resource please wait</div>}
      {blogs && <DataList allblog={blogs}/>  }

    </div>
  );
}


     
export default Danalytics;
