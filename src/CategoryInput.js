// src/CategoryInput.js
import React from "react";

const CategoryInput = ({ onSelectCategory }) => {
  const categories = [
    "inspire",
    "management",
    "sports",
    "life",
    "funny",
    "love",
    "art",
  ];

  return (
    <div>
      <label htmlFor="category">Select a category:</label>
      <select id="category" onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryInput;