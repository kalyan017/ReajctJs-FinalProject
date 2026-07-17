export default function WhyChooseUs() {

  const features = [

    "🚚 Free Delivery",

    "🔒 Secure Payments",

    "💰 Best Prices",

    "🎧 24/7 Support"

  ];

  return (

    <section>

      <h2>Why Choose Us</h2>

      <div>

        {

          features.map((item, index) => (

            <div key={index}>

              <h3>{item}</h3>

            </div>

          ))

        }

      </div>

    </section>

  )

}