import React from 'react'

export default function CategoryFilter({ category, setCategory,setSearchParams }) {
  return (
    <select
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
        setSearchParams({ page: 1 });
      }}
    >
      <option value="all">All Categories</option>
      <option value="beauty">Beauty</option>
      <option value="fragrances">Fragrances</option>
      <option value="furniture">Furniture</option>
      <option value="groceries">Groceries</option>
      <option value="mens-shirts">Men's Shirts</option>
      <option value="mens-shoes">Men's Shoes</option>
      <option value="womens-dresses">Women's Dresses</option>
      <option value="smartphones">Smartphones</option>
      <option value="laptops">Laptops</option>
    </select>
  );
}