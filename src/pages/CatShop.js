import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import shopHeader from '../assets/img/shop-header.png';
import Purina from "../assets/img/purina.png";
import Whiskas from "../assets/img/whiskas.jpg";
import MeowMix from "../assets/img/meowMix.png";
import PurinaFriskies from "../assets/img/purinaFriskies.jpg";
import catCollar from "../assets/img/catCollar.jpg";
import featherToy from "../assets/img/featherToy.jpg";

const CatShop = () => {
  const [products, setProducts] = useState([
    {
      imgUrl: Purina,
      category: "cat food",
      title: "Purina Pro Plan",
      description: "Healthy cat food by Purina",
      price: "10.00",
    },
    {
      imgUrl: Whiskas,
      category: "cat food",
      title: "Whiskas Adult (Ocean Fish Flavour)",
      description: "Healthy dry cat food by Whiskas",
      price: "10.00",
    },
    {
      imgUrl: MeowMix,
      category: "cat food",
      title: "Meow Mix Original Choice",
      description: "Dry Cat Food, 30 Pounds",
      price: "28.00",
    },
    {
      imgUrl: PurinaFriskies,
      category: "cat food",
      title: "Friskies Adult Indoor Delights",
      description: "Dry Cat Food 1kg",
      price: "8.00",
    },
    {
      imgUrl: catCollar,
      category: "cat accessories",
      title: "Japanese Style Cat Collar with Bells",
      description: "Adjustable Bowtie",
      price: "9.19",
    },
    {
      imgUrl: featherToy,
      category: "cat toy",
      title: "Interactive Feather Toys",
      description: "Healthy cat food by Purina",
      price: "4.00",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered);
    }
  };

  const addToCart = (product) => {
    // Add cart functionality
    console.log("Added to cart:", product);
  };

  return (
    <div className="catshop">
      <div
      style={{
        backgroundImage: `url(${shopHeader})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingBottom: 100
      }}
    >
      <div className="header-shop text-center align-items-center">
          <h3 className="text-white">KITTY CORNER</h3>
          <h1 className="text-white">CAT SHOP</h1>
          <p className="text-white">Kitty Corner's Cat Shop is an online store dedicated to providing a wide range of high-quality products for cats. We understand the unique needs and preferences of cat owners and strive to offer a diverse selection of cat food, cat accessories, and cat toys.</p>
      </div>
    </div>
      <h2 className="text-white text-center">The Products</h2>
      <Filter handleFilter={handleFilter} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default CatShop;