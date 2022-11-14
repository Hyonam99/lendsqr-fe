import React from "react";
import { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import SideBarNav from "../../components/SideBarNav";
import Analysis from "./Analysis";
import Products from "./Products";
import User from "./User";



const Admin = () => {

  const [user, setUser] = useState(true);
  const [analysis, setAnalysis] = useState(false);
  const [product, setProduct] = useState(false);

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
  
  return (
    <section className="mainadmin-parent-container">
      
      <Navbar />

      <section className="mainadmin-child-container">

        <section className="admin-navigation-sideBar">
         <SideBarNav showUser={setUser} showAnalysis={setAnalysis} showProduct={setProduct}/>
        </section>

        <section className="admin-data-info">
        {user && <User inW={windowSize.innerWidth} inH={windowSize.innerHeight}/>}
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
