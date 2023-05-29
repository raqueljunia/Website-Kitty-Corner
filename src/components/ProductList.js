import React from "react";
import swal from "sweetalert";

const ProductList = ({ products, addToCart, numCardsPerRow }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
    swal("Success", "Product added to cart!", "success");
  };

  let cardWidth = 100 / numCardsPerRow;
  let cardMaxWidth = "200px";

  if (numCardsPerRow === 1) {
    cardWidth = 100;
    cardMaxWidth = "100%";
  }

  return (
    <div className="product-list" style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <div className="product-card" key={product.title} style={{
            width: `${cardWidth}%`,
            maxWidth: cardMaxWidth,
            padding: "10px",
            margin: "10px auto",
            boxSizing: "border-box",
          }}>
          <img src={product.imgUrl} alt={product.title} style={{ width: "100%", height: "auto" }} />
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
