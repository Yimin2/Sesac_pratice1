import React from "react";

function Product({ proudct }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>상품명 {proudct.title}</h2>
      <p>가격$ {proudct.price}</p>
      <p>재고 {proudct.quantity}</p>
      <p>총 가격 {proudct.total}</p>
      <img src={proudct.thumbnail} alt="상품 이미지(thumbnail)" />
    </div>
  );
}

export default Product;
