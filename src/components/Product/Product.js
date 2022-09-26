import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <h4 className="product-price">Price: ${price}</h4>
        <p>
          <small>Seller {seller}</small>
        </p>
        <p>
          <small>Rating {ratings} </small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>{" "}
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
