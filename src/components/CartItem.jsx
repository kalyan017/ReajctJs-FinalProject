import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

export default function CartItem({ item }) {

  const { dispatch } = useContext(CartContext);

  return (

    <div className="cart-item">

      <img
        src={item.thumbnail}
        alt={item.title}
      />

      <div className="cart-info">

        <h3>{item.title}</h3>

        <p>Price : ₹ {item.price}</p>

        <h3>

          Subtotal : ₹ {item.price * item.quantity}

        </h3>

      </div>

      <div className="quantity">

        <button

          onClick={() => dispatch({

            type: "DECREASE_QUANTITY",

            payload: item.id

          })

          }

        >

          -

        </button>

        <span>

          {item.quantity}

        </span>

        <button

          onClick={() => dispatch({

            type: "INCREASE_QUANTITY",

            payload: item.id

          })

          }

        >

          +

        </button>

      </div>

      <button
        className="remove-btn"
        onClick={() =>
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: item.id,
          })
        }
      >
        Remove
      </button>

    </div>

  );
}