import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Breadcrumb from "./components/Breadcrumb";
import "./style.css";

export default function Breadcrumbs() {
    return (
        <BrowserRouter>
            <div className='App'>
                <h1>Ecommerce Store</h1>
                {/* breadcrumbs */}
                <Breadcrumb />
                {/* routes */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<ProductListing />} />
                    <Route path='/products/:id' element={<ProductDetails />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
