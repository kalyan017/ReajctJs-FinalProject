import "../styles/WhyChooseUs.css";

export default function WhyChooseUs() {

  const features = [

    {
      icon: "🚚",
      title: "Free Delivery",
      desc: "Free shipping on orders over ₹999."
    },

    {
      icon: "🔒",
      title: "Secure Payments",
      desc: "100% safe and encrypted checkout."
    },

    {
      icon: "💰",
      title: "Best Prices",
      desc: "Amazing deals and exclusive discounts."
    },

    {
      icon: "🎧",
      title: "24/7 Support",
      desc: "Friendly support whenever you need it."
    }

  ];

  return (

    <section className="why">

      <h2>Why Choose EasyBuy?</h2>

      <p className="why-subtitle">
        Shopping made simple, secure, and affordable.
      </p>

      <div className="why-grid">

        {

          features.map((item, index) => (

            <div
              className="why-card"
              key={index}
            >

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))

        }

      </div>

    </section>

  );

}