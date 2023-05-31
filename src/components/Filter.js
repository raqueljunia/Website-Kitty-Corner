import React from "react";

const Filter = ({ handleFilter, handleSearch }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="cat food">Cat Food</option>
        <option value="cat accessories">Cat Accessories</option>
        <option value="cat toy">Cat Toys</option>
      </select>
    </div>
  );
};

export default Filter;
