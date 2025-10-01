import React from "react";

function Product({ product }) {
  return (
    <div className="border border-gray-300 rounded-lg p-5 m-2.5 shadow-md bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="m-0 mb-2.5 text-gray-800 text-xl font-semibold">
        {product.title}
      </h3>
      <p className="m-0 text-gray-600 leading-relaxed">
        {product.description}
      </p>
    </div>
  );
}

export default Product;
