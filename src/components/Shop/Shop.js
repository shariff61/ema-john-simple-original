import React, { useEffect, useState } from "react";
import { addToDb, getLoadData } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  console.log("first line fetch of product");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log("last line fetch of product");
  }, []);

  useEffect(() => {
    console.log("first line store data");
    const storedData = getLoadData();
    const saveData = [];
    for (const id in storedData) {
      const addProduct = products.find((product) => product.id === id);
      if (addProduct) {
        const quantity = storedData[id];
        addProduct.quantity = quantity;
        saveData.push(addProduct);
      }
      setCart(saveData);
    }
    console.log("last line store data");
  }, [products]);

  const handleAddToCart = (selectProduct) => {
    let newCart = [];
    let exists = cart.find((product) => product.id === selectProduct.id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectProduct.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {/* <h2>Products: {products.length}</h2> */}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
