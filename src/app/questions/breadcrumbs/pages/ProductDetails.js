import Image from "next/image";
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

export default function ProductDetails() {
    let { id } = useParams();
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <div>
            <p>product details 👇</p>
            {product ? (
                <div className='product-card'>
                    <Image
                        src={product.thumbnail}
                        alt='Product'
                        width={300}
                        height={300}
                    />
                    <h3>{product.title}</h3>
                    <h3>$ {product.price}</h3>
                    <p>{product.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
