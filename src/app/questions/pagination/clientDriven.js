import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function ClientDriven() {
    const [products, setProducts] = useState({
        data: [],
        count: 0
    });

    const [page, setPage] = useState(1);

    const fetchProducts = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts({
            data: data.products,
            count: data.total
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handlePageChange = (selectedPage) => {
        setPage(selectedPage);
    };

    return (
        <React.Fragment>
            {products.data.length && (
                <div className={styles.products}>
                    {products.data
                        .slice(page * 10 - 10, page * 10)
                        .map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={styles.product__single}
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width={100}
                                        height={100}
                                    />
                                    <span>{item.title}</span>
                                </div>
                            );
                        })}
                </div>
            )}

            {products.data.length && (
                <div className={styles.pagination}>
                    <button
                        disabled={page === 1}
                        onClick={() => handlePageChange(page - 1)}
                    >
                        back
                    </button>
                    {[...new Array(products.data.length / 10)].map((_, i) => (
                        <span
                            className={
                                page === i + 1 ? styles.pagination__select : ""
                            }
                            onClick={() => handlePageChange(i + 1)}
                            key={i}
                        >
                            {i + 1}
                        </span>
                    ))}
                    <button
                        disabled={page === products.data.length / 10}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        next
                    </button>
                </div>
            )}
        </React.Fragment>
    );
}
