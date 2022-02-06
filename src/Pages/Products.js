/*
    Component sem fer í gegnum hvert fyrirtæki úr leit og skilar gögnum til sérhvert fyritæki.
     Ef scrollað er niður og síðasta fyrirtækið sést þá er kall að í parent component og náð eru í 
     fleirri gögn frá vefþjónustu ja.is. (Continous scrolling)
*/
import React from "react";
import Product from "../components/Product";
import "./Products.css";

function Products({ myRef, ...props}) {
  return (
    <div className="products">
      <h1>Fyrirtæki</h1>
      <div id="product-container">
        {props.results.results.map((product) => {
          return product.map((p, index) => {
            if (product.length === index + 1) {
              return (
                <Product
                  innerRef={myRef}
                  key={p.common_id}
                  product={p}
                />
              );
            } else {
              return <Product key={p.common_id} product={p} />;
            }
          });
        })}
          </div>
      <p>{props.results.loading && "Hleður..."}</p>
      <p>{props.results.error && "Villa!"}</p>
    </div>
  );
}

export default Products;
