import React from 'react'

export default function SortProducts({ sort, setSort,setSearchParams }) {

  return (
    <select
      value={sort}
      onChange={(e) => {
        setSort(e.target.value);
        setSearchParams({ page: 1 });
      }}
    >

      <option value="">
        Sort Products
      </option>

      <option value="low">
        Price Low to High
      </option>

      <option value="high">
        Price High to Low
      </option>

      <option value="az">
        A - Z
      </option>

      <option value="za">
        Z - A
      </option>

    </select>
  );
}