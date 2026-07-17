import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>
      <h2>this is dashboard page</h2>
      <Link to="orders">Orders</Link> |{" "}
       <Link to="wishlist">Wishlist</Link> |{" "}
      <Link to="settings">Settings</Link>
      <hr />

      <Outlet />
    </div>
  )
}
