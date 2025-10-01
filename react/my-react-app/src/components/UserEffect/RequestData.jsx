import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product.jsx";

function RequestData() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await axios("https://dummyjson.com/products");
      const data = response.data;
      setProducts(data.products);
    }
    getProducts();
  }, []);
  return (
    <div>
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}

export default RequestData;
