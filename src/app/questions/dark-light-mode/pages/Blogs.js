import React from "react";
import { useTheme } from "../theme-context";

const Blogs = () => {
    const { theme } = useTheme();

    return (
        <div>
            <h1>Blog Page</h1>
            <p>Read our latest blog posts!</p>
        </div>
    );
};

export default Blogs;
