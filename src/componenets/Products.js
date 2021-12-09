import React from "react";
import "../styles/Product.css";

function Products({ image, title, price }) {
    return (
      <div className="product">
        <img src={image} alt="product-img" />
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <button className="product-button">COMPRAR</button>
        </div>
      </div>
    ); }
  
  export default Products;
  