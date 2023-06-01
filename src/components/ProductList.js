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
        <div
          className="product-card"
          key={product.title}
          style={{
            width: `${cardWidth}%`,
            maxWidth: cardMaxWidth,
            padding: "10px",
            margin: "10px auto",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img src={product.imgUrl} alt={product.title} style={{ width: "100%", height: "auto" }} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
          <div style={{ marginTop: "auto" }}>
            <p style={{ marginBottom: "0" }}>Price: {product.price}</p>
          </div>
          <div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
