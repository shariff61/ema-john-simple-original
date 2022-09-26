import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h1>Order Summery</h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: </p>
      <p>Total Shipping Charge: </p>
      <p>Tax: </p>
      <p>Grand total: </p>
    </div>
  );
};

export default Cart;
