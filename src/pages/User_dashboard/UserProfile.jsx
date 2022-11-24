import React from "react";
import { useEffect, useState } from "react";
import { toCurrency } from "../../utilityFunctions";

const UserProfile = ({ theUser, goBack }) => {
  return (
    <section>
      <button
        onClick={() => {
          goBack(false);
        }}
      >
        {" "}
        Go back
      </button>
      <div className="user-profile-actions">
        <p>User Details</p>
        <div className="action-buttons">
          <button>BLACKLIST USER</button>
          <button>ACTIVATE USER</button>
        </div>
      </div>
      <section className="user-profile-intro">
        
        <div className="user-profile-intro-card">
          <div className="user-profile-intro-picture"> <img src={theUser.picture.large} /> </div>
          <span>
            <p>{theUser.name.first} {theUser.name.Last}</p> <p>Loan id</p>{" "}
          </span>
        </div>
        <div className="user-profile-intro-rating"> 100 star</div>
        <div className="user-profile-intro-account-balance">{`N ${toCurrency(theUser.location.postcode * 400)}`}</div>
      </section>

      <section className="user-profile-details">
        <div className="user-profile-details-display-info">
          <h4>Personal Information</h4>
          <span className="user-profile-details-display-info-card">
            <p>Full Name <span>{theUser.name.title} {theUser.name.first} {theUser.name.Last}</span></p>
            <p>Phone Number <span>{theUser.cell}</span></p>
            <p>Email <span>{theUser.email}</span></p>
            <p>Gender <span>{theUser.gender}</span></p>
          </span>
        </div>
        <div className="user-profile-details-display-info">
          <h4>Educational Information</h4>
          <span className="user-profile-details-display-info-card">
            <p>Full Name <span>Name here</span></p>
            <p>Phone Number <span>Number here</span></p>
            <p>Email <span>Email here</span></p>
            <p>Gender <span>Gender here</span></p>
          </span>
        </div>

        <div className="user-profile-details-display-info">
          <h4>Social Information</h4>
          <span className="user-profile-details-display-info-card">
            <p>Full Name <span>Name here</span></p>
            <p>Phone Number <span>Number here</span></p>
            <p>Email <span>Email here</span></p>
            <p>Gender <span>Gender here</span></p>
          </span>
        </div>
      </section>
    </section>
  );
};

export default UserProfile;
