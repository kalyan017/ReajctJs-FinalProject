import React from 'react'
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='orders' element={<Orders />} />
                    <Route path='wishlist' element={<Wishlist />} />
                    <Route path='settings' element={<Settings />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </div>
    )
}
