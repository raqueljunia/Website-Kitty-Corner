import React from "react";

const Filter = ({ handleFilter }) => {
  return (
    <div className="filter">
      <button onClick={() => handleFilter("all")}>All</button>
      <button onClick={() => handleFilter("cat food")}>Cat Food</button>
      <button onClick={() => handleFilter("cat accessories")}>Cat Accessories</button>
      <button onClick={() => handleFilter("cat toy")}>Cat Toy</button>
    </div>
  );
};

export default Filter;
