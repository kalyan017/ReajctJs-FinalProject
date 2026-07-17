import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import '../styles/FeaturedProducts.css'
export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            const response = await fetch("https://dummyjson.com/products?limit=4");
            const data = await response.json();
            setProducts(data.products);
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <section className="featured-products">

            <div className="container">

                <h2>Featured Products</h2>

                <div className="products-grid">

                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}