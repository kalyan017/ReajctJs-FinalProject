import React from 'react'

export default function SearchBar({ search, setSearch,setSearchParams }) {
  return (
    <input
      type="text"
      placeholder="Search Products..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setSearchParams({ page: 1 });
      }}
    />
  );
}
