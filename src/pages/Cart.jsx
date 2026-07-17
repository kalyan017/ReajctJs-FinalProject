import React from 'react'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty 🛒</h1>
      </div>
    );
  }
  const total =
    cartItems.reduce(

      (sum, item) =>

        sum + (item.price * item.quantity),

      0
    )
  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {
        cartItems.map((item) => (

          <CartItem
            key={item.id}
            item={item}
          />

        ))
      }

      <div className="cart-total">

        <h2>Total : ₹ {total}</h2>

        <button className="checkout-btn">
          Checkout
        </button>

      </div>

    </div>
  );
}
