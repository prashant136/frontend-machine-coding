import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

export default function ProductListing() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.products));
    }, []);

    return (
        <div className='product-grid'>
            {products?.map((product) => (
                <div key={product.id} className='product-card'>
                    <Link to={`/products/${product.id}`}>
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            width={100}
                            height={250}
                            style={{ objectFit: "cover" }}
                        />
                        <h3>{product.title}</h3>
                        <h3>${product.price}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}
