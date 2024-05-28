// magine you have a list of products and you want to implement a search feature.
// Filtering the list can be computationally expensive if the list is large.

import React, { useState, useMemo } from "react";

const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 4, name: "Monitor", price: 150 },
    { id: 5, name: "Keyboard", price: 75 },
    { id: 6, name: "Mouse", price: 50 },
    { id: 7, name: "Smartwatch", price: 200 },
    { id: 8, name: "Camera", price: 450 },
    { id: 9, name: "Printer", price: 600 },
    { id: 10, name: "Headphones", price: 250 }
];

export default function SearchFilter() {
    const [search, setSearch] = useState("");

    const filteredProducts = useMemo(() => {
        console.log("Filtering products...");
        return products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div>
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search products'
            />
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
