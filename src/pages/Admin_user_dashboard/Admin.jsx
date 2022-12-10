import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import SideBarNav from "../../components/SideBarNav";
import Analysis from "./Analysis";
import Products from "./Products";
import Dashboard from "./Dashboard";
import { AdminContext } from "../../Contexts/AdminContext";

// const customClient = axios.create({
//    userBase : "https://randomuser.me/api"
// });
const Admin = () => {
  const userBase = "https://randomuser.me/api/?results=20";  

  const [renderedUsers, setRenderedUsers] = useState(null);
  const [user, setUser] = useState(true);
  const [analysis, setAnalysis] = useState(false);
  const [product, setProduct] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    async function getCloudUsers (){
      const cloudResponse = await axios.get(userBase);
      setRenderedUsers(cloudResponse.data.results)
    }

    getCloudUsers()
  }, []);
  if (error) return `please refresh your page an error occured`;
  if (!renderedUsers) return `No users found check command again`;

  return (
    <section className="mainadmin-parent-container">
      <AdminContext.Provider value={{renderedUsers, searchValue, setSearchValue}}>
      <Navbar />

      <section className="mainadmin-child-container">
        <section className="admin-navigation-sideBar">
          <SideBarNav
            showUser={setUser}
            showAnalysis={setAnalysis}
            showProduct={setProduct}
          />
        </section>

        <section className="admin-data-info">
          {user && (
            <Dashboard
              inW={windowSize.innerWidth}
              inH={windowSize.innerHeight}
            />
          )}
          {analysis && <Analysis />}
          {product && (
            <Products
              inW={windowSize.innerWidth}
              inH={windowSize.innerHeight}
            />
          )}
        </section>
      </section>
      </AdminContext.Provider>
    </section>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default Admin;



/***************************************************
 *  axios.get(userBase).then((response) => {
      setRenderedUsers(response.data.results)
     }).catch(error => {
       setError(error)
     })
 ****************************************************/
 