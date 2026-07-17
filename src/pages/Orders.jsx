import "../styles/Orders.css";

export default function Orders() {

  const orders = [

    {
      id: "#10231",
      product: "iPhone 16 Pro",
      price: "₹999",
      status: "Delivered",
      date: "12 July 2026",
    },

    {
      id: "#10232",
      product: "MacBook Air",
      price: "₹1299",
      status: "On the Way",
      date: "15 July 2026",
    },

    {
      id: "#10233",
      product: "Sony Headphones",
      price: "₹199",
      status: "Cancelled",
      date: "10 July 2026",
    },

  ];

  return (

    <div className="orders">

      <h2>My Orders</h2>

      <p className="orders-subtitle">
        Track your recent purchases.
      </p>

      {

        orders.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            <div>

              <h3>{order.product}</h3>

              <p>Order ID : {order.id}</p>

              <p>{order.date}</p>

            </div>

            <div className="order-right">

              <h2>{order.price}</h2>

              <span
                className={`status ${order.status
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                {order.status}
              </span>

            </div>

          </div>

        ))

      }

    </div>

  );

}