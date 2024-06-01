import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme-context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import "./styles.css";

export default function DarkMode() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <div className='app'>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/blog' element={<Blogs />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}
