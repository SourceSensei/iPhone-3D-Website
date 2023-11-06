import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";

function Jumbotron() {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img src={Iphone} alt="iPhone 14 Pro" className="logo" />
      <p className="text">Big and bigger</p>
      <span className="description">
        From $41.62/mo for 24 mo or $999 before trade-in
      </span>
      <ul className="links">

      </ul>
    </div>
  );
}

export default Jumbotron;
