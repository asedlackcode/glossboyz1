import React from "react";
import "./Loader.css";
import logo from "../imgs/GBD-Final Files/logowhite.png";

function Loader() {
  return (
    <div>
      <img src={logo} className="loadingLogo" alt="" />
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loader;
