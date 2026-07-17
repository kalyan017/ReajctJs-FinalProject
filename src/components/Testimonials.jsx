import "../styles/Testimonials.css";

export default function Testimonials() {

    const reviews = [

        {
            name: "Rahul Sharma",
            rating: "⭐⭐⭐⭐⭐",
            review:
                "Amazing products and very fast delivery. Highly recommended!",
        },

        {
            name: "Priya Reddy",
            rating: "⭐⭐⭐⭐⭐",
            review:
                "The quality exceeded my expectations. Great shopping experience!",
        },

        {
            name: "Arjun Kumar",
            rating: "⭐⭐⭐⭐⭐",
            review:
                "Easy to use website, secure payment, and excellent customer support.",
        },

    ];

    return (

        <section className="testimonials">

            <h2>What Our Customers Say</h2>

            <p className="testimonial-subtitle">
                Thousands of happy customers trust EasyBuy.
            </p>

            <div className="testimonial-grid">

                {

                    reviews.map((review, index) => (

                        <div
                            className="testimonial-card"
                            key={index}
                        >

                            <div className="customer-avatar">
                                {review.name.charAt(0)}
                            </div>

                            <div className="stars">
                                {review.rating}
                            </div>

                            <p className="review">
                                "{review.review}"
                            </p>

                            <h4>{review.name}</h4>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}