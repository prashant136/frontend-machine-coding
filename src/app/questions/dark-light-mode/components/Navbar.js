import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className='navbar'>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div className='mode-switch'>
                <label>
                    <input
                        type='checkbox'
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                    />
                    <span className='slider round'></span>
                </label>
            </div>
        </nav>
    );
}
