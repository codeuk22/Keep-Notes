import React from "react";
import logo from "./logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70px" height="50px" />
        <h1>Keep Notes Here</h1>
      </div>
    </>
  );
};

export default Header;
