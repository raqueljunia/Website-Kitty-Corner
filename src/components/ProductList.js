import React from "react";
import swal from "sweetalert"; // Import SweetAlert

const ProductList = ({ products, addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
    swal("Success", "Product added to cart!", "success"); // Display SweetAlert
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.title}>
          <img src={product.imgUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
