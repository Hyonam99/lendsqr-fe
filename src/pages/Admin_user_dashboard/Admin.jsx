import React from "react";

import Navbar from "../../components/Navbar";
import SideBarNav from "../../components/SideBarNav";

const Admin = () => {

  
  
  return (
    <section className="mainadmin-parent-container">
      
      <Navbar />

      <section className="mainadmin-child-container">

        <section className="admin-navigation-sideBar">
         <SideBarNav />
        </section>

        <section className="admin-data-info">
        <p>this is the main data
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptatum minima eaque pariatur, sequi maiores eum laboriosam, 
          fugit, sapiente excepturi accusantium magnam ea quibusdam repellendus 
          iure praesentium ipsum. Quidem, ratione magni?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptatum minima eaque pariatur, sequi maiores eum laboriosam, 
          fugit, sapiente excepturi accusantium magnam ea quibusdam repellendus 
          iure praesentium ipsum. Quidem, ratione magni?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptatum minima eaque pariatur, sequi maiores eum laboriosam, 
          fugit, sapiente excepturi accusantium magnam ea quibusdam repellendus 
          iure praesentium ipsum. Quidem, ratione magni?
        </p>
        </section>

      </section>
    </section>
  );
};

export default Admin;
