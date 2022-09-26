import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // for of loop
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = parseFloat(total + shipping) + tax;
  // const total = cart.reduce((price, total) => price + total.price, 0);

  return (
    <div className="cart">
      <h1>Order Summery</h1>
      <p>Selected Items: {quantity}</p>
      <p>Total Price:${total} </p>
      <p>Total Shipping Charge: ${shipping} </p>
      <p>Tax: {tax}</p>
      <p>Grand total: {grandTotal} </p>
    </div>
  );
};

export default Cart;
