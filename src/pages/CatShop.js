import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import shopHeader from '../assets/img/shop-header.png';
import Purina from "../assets/img/purina.png";
import PurinaOne from "../assets/img/PurinaOne.jpg";
import Whiskas from "../assets/img/whiskas.jpg";
import WhiskasSmall from "../assets/img/whiskasSmall.jpg";
import MeowMix from "../assets/img/meowMix.png";
import FunkyFeast from "../assets/img/FunkyFeast.png";
import RoyalCanineAppetite from "../assets/img/RoyalCaninAppetite.png";
import PurinaFriskies from "../assets/img/purinaFriskies.jpg";
import catCollar from "../assets/img/catCollar.jpg";
import featherToy from "../assets/img/featherToy.jpg";
import catBackpack from "../assets/img/catBackpack.jpg";
import CatHarness from "../assets/img/CatHarness.jpg";
import CatShoes from "../assets/img/CatShoes.png";
import CatNipToy from "../assets/img/catnipToy.jpg";
import CatWheel from "../assets/img/catWheel.png";

const CatShop = () => {
  const [products] = useState([
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
      imgUrl: catBackpack,
      category: "cat accessories",
      title: "Cat Backpack Carrier",
      description: "Cat Backpack Carrier Designed for Travel, Hiking, Walking & Outdoor Use",
      price: "30.00",
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
      description: "Cat toy to stimulate your cats hunting instincts",
      price: "1.05",
    },
    {
      imgUrl: FunkyFeast,
      category: "cat food",
      title: "Funky Feast Chunky Cat Food",
      description: "Chunky Cat Food with Chicken 850g",
      price: "1.65",
    },
    {
      imgUrl: RoyalCanineAppetite,
      category: "cat food",
      title: "Royal Canin Appetite Control Care",
      description: "Dry Cat Food for cats from 1 to 7 years old",
      price: "34.99",
    },
    {
      imgUrl: CatShoes,
      category: "cat accessories",
      title: "Cat Shoes Anti-Scratch Paw Protector",
      description: "Easy to clean, and prevent from pet scratching.",
      price: "9.00",
    },
    {
      imgUrl: PurinaOne,
      category: "cat food",
      title: "Purina ONE Adult",
      description: "Indoor Dry Cat Food with Chicken 500g",
      price: "10.00",
    },
    {
      imgUrl: WhiskasSmall,
      category: "cat food",
      title: "Whiskas Kitten Small",
      description: "(2-12 months) Dry Cat Food",
      price: "3.07",
    },
    {
      imgUrl: CatHarness,
      category: "cat accessories",
      title: "Cat Harness",
      description: "Comfortable And Secure Harness",
      price: "9.00",
    },
    {
      imgUrl: CatNipToy,
      category: "cat toy",
      title: "Catnip Toy",
      description: "Lightweight and perfect size catnip toys for cats to chase, roll and carry",
      price: "7.04",
    },
    {
      imgUrl: CatWheel,
      category: "cat toy",
      title: "Cat Exercise Wheel",
      description: "Indoor Large Cat Toy With Moveable Carpet",
      price: "50.30",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [numCardsPerRow, setNumCardsPerRow] = useState(3);

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setNumCardsPerRow(2);
      } else {
        setNumCardsPerRow(3);
      }
    };

    handleResize(); // Call on initial render

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener on component unmount
    };
  }, []);

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
      <ProductList products={filteredProducts} addToCart={addToCart} numCardsPerRow={numCardsPerRow} />
    </div>
  );
};

export default CatShop;