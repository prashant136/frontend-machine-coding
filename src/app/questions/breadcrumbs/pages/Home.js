import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

export default function Home() {
    const [trendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                const slicedTrendingProducts = data.products.slice(0, 6);
                setTrendingProducts(slicedTrendingProducts);
            });
    }, []);

    return (
        <>
            <span>Trending Products 🔥</span>
            <div className='product-grid'>
                {trendingProducts?.map((product) => (
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
            <Link to='/products'>
                <button style={{ width: "100%", padding: 10 }}>
                    View All Products
                </button>
            </Link>
        </>
    );
}
