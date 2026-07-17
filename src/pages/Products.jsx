import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import CategoryFilter from "../components/CategoryFilter";
import SortProducts from "../components/SortProducts";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { useState,useEffect} from "react";
import "../styles/Products.css";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 12;

  const {
    data,
    loading,
    error,
  } = useFetch("https://dummyjson.com/products?limit=194");

  useEffect(() => {
  setSearchParams({ page: 1 });
}, [search, category, sort]);
  const products = data.products || [];

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  let sortedProducts = [...filteredProducts];

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  else if (sort === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
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
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(
    startIndex,
    endIndex
  );
  return (
    <div className="products-page">

      <h1>Our Products</h1>

      <div className="top-controls">
        <SearchBar
          search={search}
          setSearch={setSearch}
          setSearchParams={setSearchParams}
        />
        <CategoryFilter
          category={category}
          setCategory={setCategory}
          setSearchParams={setSearchParams}
        />
        <SortProducts
          sort={sort}
          setSort={setSort}
          setSearchParams={setSearchParams}
        />
      </div>

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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setSearchParams={setSearchParams}
      />

    </div>
  );
}