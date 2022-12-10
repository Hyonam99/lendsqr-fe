import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from '../../images_asset/chart.jpg'

const Analysis = () => {
  // const userBase = "https://randomuser.me/api/?results=20"; 
  const userBase = "https://www.omdbapi.com/?apikey=3e4adb96&s=Avengers"; 
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCloudUsers (){
      const cloudResponse = await axios.get(userBase);
      console.log(cloudResponse.data)
    }

    getCloudUsers()
  }, []);
  if (error) return `please refresh your page an error occured`;


  return (
    <section className='chart-container'>
      <h2>Customers Trend Analysis</h2>
      <div className="chart-box-holder">
      
      </div>  
      <span>This page is still under development</span>    
    </section>
  )
}

export default Analysis