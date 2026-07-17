import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import CategoryFilter from "../components/CategoryFilter";
import SortProducts from "../components/SortProducts";
import Loader from "../components/Loader";

import "../styles/Products.css";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch("https://dummyjson.com/products?limit=194");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setTimeout(() => {
          setProducts(data.products);
          setLoading(false);
        }, 500);

      } catch (err) {

        setError(err.message);
        setLoading(false);

      } 

    };

    fetchProducts();

  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="products-page">

      <h1>Our Products</h1>

      <div className="top-controls">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
        <CategoryFilter />
        <SortProducts />
      </div>

      <div className="products-grid">

        {
          filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))
        }

      </div>

      <Pagination />

    </div>
  );
}