import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import CategoryFilter from "../components/CategoryFilter";
import SortProducts from "../components/SortProducts";
import Loader from "../components/Loader";

import useFetch from "../hooks/useFetch";

import "../styles/Products.css";

export default function Products() {


  const [sort, setSort] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
 const search =
    searchParams.get("search") || "";
  const category = searchParams.get("category") || "all";

  const currentPage = Number(searchParams.get("page")) || 1;

  const itemsPerPage = 12;

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=194"
  );

  const products = data.products || [];

  if (loading) return <Loader />;

  if (error) return <h2>{error}</h2>;

  // Category Change
  const handleCategoryChange = (value) => {

    const params = new URLSearchParams(searchParams);

    params.set("category", value);

    params.set("page", "1");

    setSearchParams(params);

  };

  // Search
  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;

  });

  // Sorting
  let sortedProducts = [...filteredProducts];

  if (sort === "low") {

    sortedProducts.sort(
      (a, b) => a.price - b.price
    );

  }

  else if (sort === "high") {

    sortedProducts.sort(
      (a, b) => b.price - a.price
    );

  }

  else if (sort === "az") {

    sortedProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

  }

  else if (sort === "za") {

    sortedProducts.sort((a, b) =>
      b.title.localeCompare(a.title)
    );

  }

  const totalPages = Math.ceil(
    sortedProducts.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (

    <div className="products-page">

      <h1>Our Products</h1>

      <div className="top-controls">

        <SearchBar
          search={search}
          setSearch={(value) => {

            setSearchParams({
              search: value,
              page: 1
            });

          }}
        />

        <CategoryFilter
          category={category}
          setCategory={handleCategoryChange}
        />

        <SortProducts
          sort={sort}
          setSort={setSort}
        />

      </div>

      {

        currentProducts.length > 0 ?

          <div className="products-grid">

            {

              currentProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))

            }

          </div>

          :

          <div className="no-products">

            <h2>😔 No Products Found</h2>

            <p>
              Try changing your search or category.
            </p>

          </div>

      }

      {

        totalPages > 0 &&

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

      }

    </div>

  );

}