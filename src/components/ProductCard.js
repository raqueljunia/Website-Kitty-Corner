import React from "react";

const ProductCard = ({ product, addToCart }) => {
  const { imgUrl, category, title, description, price } = product;

  return (
    <div className="product-card">
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
