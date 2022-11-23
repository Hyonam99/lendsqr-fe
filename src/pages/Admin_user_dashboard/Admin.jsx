import React from "react";
import axios from 'axios'
import { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import SideBarNav from "../../components/SideBarNav";
import Analysis from "./Analysis";
import Products from "./Products";
import Dashboard from "./Dashboard";



const Admin = () => {

  const userBase = 'https://randomuser.me/api/?results=5'
  const localUsers = JSON.parse(localStorage.getItem('onlineUsers'));
  
  const [nuser, setNUser] = useState(localUsers);
  const [terror, setTError] = useState(null);
  const [user, setUser] = useState(true);
  const [analysis, setAnalysis] = useState(false);
  const [product, setProduct] = useState(false);
  const [checkUser, setCheckUser] = useState(false)

  const [windowSize, setWindowSize] = useState(getWindowSize());


  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(()=>{
    axios.get(userBase)
      .then((response) => {
        localStorage.setItem('onlineUsers', JSON.stringify(response.data.results))    
      }).catch((terror) => {
          setTError(terror)
      });
      
  }, [])


  
  return (
    <section className="mainadmin-parent-container">
      
      <Navbar />

      <section className="mainadmin-child-container">

        <section className="admin-navigation-sideBar">
         <SideBarNav showUser={setUser} showAnalysis={setAnalysis} showProduct={setProduct}/>
        </section>

        <section className="admin-data-info">
        {user && <Dashboard inW={windowSize.innerWidth} inH={windowSize.innerHeight} allLoanUsers={nuser}/>}
        {analysis && <Analysis />}
        {product && <Products inW={windowSize.innerWidth} inH={windowSize.innerHeight}/>}
        </section>

      </section>
    </section>
  );
};

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default Admin;
