import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "../../components/LineChart";
// import ChartP from '../../images_asset/chart.jpg'

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
        <LineChart />
      </div>  
    </section>
  )
}

export default Analysis