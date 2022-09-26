import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/order">Order</a>
        <a href="/order-review">Order-review</a>
        <a href="/manage-inventory">Manage-inventory</a>
        <a href="/login">Login</a>
      </nav>
    </div>
  );
};

export default Header;
