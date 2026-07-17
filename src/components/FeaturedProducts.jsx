import ProductCard from "./ProductCard";

const products = [

    {
        id: 1,
        title: "Laptop",
        category: "Electronics",
        price: 65000,
        image: "https://via.placeholder.com/250"
    },

    {
        id: 2,
        title: "Shoes",
        category: "Fashion",
        price: 3000,
        image: "https://via.placeholder.com/250"
    },

    {
        id: 3,
        title: "Watch",
        category: "Accessories",
        price: 4000,
        image: "https://via.placeholder.com/250"
    },

    {
        id: 4,
        title: "Headphones",
        category: "Electronics",
        price: 2500,
        image: "https://via.placeholder.com/250"
    }

];

export default function FeaturedProducts() {

    return (

        <section>

            <h2>Featured Products</h2>

            <div className="products-grid">

                {

                    products.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                        />

                    ))

                }

            </div>

        </section>

    )

}