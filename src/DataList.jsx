import "./style.css";
import Filter from './image_icons_asset/filter-button.svg'
import { useState } from "react";
import Menu from './image_icons_asset/pop-up-icon.svg'
import Prev from './image_icons_asset/prev btn.svg'
import Next from './image_icons_asset/next btn.svg'
import User from './image_icons_asset/users.svg'
import Users from './image_icons_asset/users.svg'
import Loan from './image_icons_asset/loans-icon.svg'
import Loan_s from './image_icons_asset/loans-savings.svg'


function DataList({allblog}){

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  const nextP = () => {
    console.log(count2 + ' count 1 is ' + count1)
    if(count2 >= 100){
      setCount2(count2)
    }else {
      setCount2(count2 + 10)
      setCount1(count1 + 10)
    }
  }
  const prevP = () => {
    console.log(count1 + ' count 2 is ' + count2)
    if(count1 == 0){
      setCount1(count1)
    }else {
      setCount1(count1 - 10)
      setCount2(count2 - 10)
    }
   
  }

  const changeDate = (CurrentDt) => {
      // Date (CurrentDt)
  }
  
  return(

    <>
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
    <section className="Dash-table">
      
    <table >
      <thead>
      <tr>
        <th>ORGANIZATION <img src={Filter}/></th>
        <th>USERNAME <img src={Filter}/></th>
        <th>EMAIL <img src={Filter}/></th>
        <th>PHONE NUMBER <img src={Filter}/></th>
        <th>DATE JOINED <img src={Filter}/></th>
        <th>STATUS <img src={Filter}/></th>
        <th>ICON <img src={Filter}/></th>
      </tr>
      </thead>
      {allblog.map((blog) => (
        
      <tbody key={blog.id}>
        
      <tr>
<td>{blog.orgName} </td>
<td>{blog.userName} </td>
<td>{blog.email} </td>
<td>{blog.phoneNumber} </td>
<td> {changeDate(blog.createdAt)} </td>
<td>{changeDate(blog.lastActiveDate)} </td>       
<td><img src={Menu}/></td>
</tr>  
      </tbody>
      )).slice(count1, count2)}
    </table>

   
    </section>  
    <div className="pagebreak">
      <section>showing <span>{ `${count2 - count1}` }</span> out of 100 </section>
      <section className="pagination-butttons">
        <i onClick={prevP}><img src={Prev}/> </i>
        <p> {`${(count1 / 10) + 1}....`} </p>
        <i onClick={nextP}><img src={Next}/></i>
        </section>
      </div> 

    </>
    
  );
}

export default DataList

/**
 *  {allblog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{ blog.id }</h3>
          <h4>{ blog.userName }</h4>
          <p>{ blog.email }</p>
          <p>{ blog.phoneNumber }</p>
          <p>{ blog.profile.firstName }</p>
          <p>{ blog.orgName }</p>
        </div>
      ))}
 */