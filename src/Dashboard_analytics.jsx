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


//! the table row for the data fetched from the api

/*******************************************
<tr>
<td>Anom</td>
<td>Tekken</td>
<td>telma@mail.com</td>
<td>08180387593</td>
<td>20 Oct 2020</td>
<td>Pending</td>       
<td>|</td>
</tr>

<DataList allblog={blogs}/>  

   <section className="Dash-preview">
        <div className="card">
          <p><img src={ User } alt="" /></p>
          <p>USERS</p>
          <p>2,000</p>
        </div>
        <div className="card">
        <p><img src={ User } alt="" /></p>
          <p>ACTIVE USERS</p>
          <p>2,000</p>
        </div>
        <div className="card">
        <p><img src={ Loan } alt="" /></p>
          <p>USERS WITH LOANS</p>
          <p>2,000</p>
        </div>
        <div className="card">
        <p><img src={ Loan_s } alt="" /></p>
          <p>USERS WITH SAVINGS</p>
          <p>2,000</p>
        </div>
      </section>
 ****************************************/
export default Danalytics;
