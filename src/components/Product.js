/*
  Component sem listar upp hvert og eitt fyrirtæki.
*/
import React from "react";
import * as FaIcons from "react-icons/fa";

import "./Product.css";
export const Product = ({ innerRef, ...product }) => {
  return (
    <>
      <div className="product-card" ref={innerRef}>
        <div id="product-image">
          <img
            alt=""
            src={`https://media.ja.is/${product.product?.logo_url}`}
          />
        </div>
        <div id="details">
          <div id="product-contact-info">
            <p id="product-card-title">
              <FaIcons.FaBuilding id="icon" />
              {product.product?.company_registry_name}
            </p>
            <a
              id="product-card-location"
              href={"tel:+" + product.product?.phone?.number}
              rel="noreferrer"
              target="_blank"
            >
              <FaIcons.FaPhoneAlt id="icon" /> {product.product?.phone?.pretty}
            </a>
            <a
              id="product-card-location"
              href={"mailto:" + product.product?.email}
              rel="noreferrer"
              target="_blank"
            >
              <FaIcons.FaEnvelope id="icon" /> {product.product?.email}
            </a>
            <a
              id="product-card-location"
              href={product.product?.url}
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaGlobe id="icon" /> {product.product?.url_pretty}
            </a>
            <a
              id="product-card-street"
              href={product.product.geo?.ja360_links?.interactive}
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaLocationArrow id="icon" /> {product.product?.street},{" "}
              {product.product?.postal_station}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
