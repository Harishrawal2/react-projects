import React from "react";

export default function Product({ product, addToCart }) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.body}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
