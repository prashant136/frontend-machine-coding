import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function ServerDriven() {
    const [products, setProducts] = useState({
        data: [],
        total: 0,
        skip: 0,
        loader: false
    });

    const [page, setPage] = useState(1);

    const fetchProducts = async (skip) => {
        setProducts({
            ...products,
            data: [],
            loader: true
        });
        const res = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${skip}`
        );
        const data = await res.json();
        console.log(data);
        setProducts({
            ...products,
            data: [...data.products],
            total: data.total,
            skip: data.skip,
            loader: false
        });
    };

    useEffect(() => {
        fetchProducts(0);
    }, []);

    const handlePageChange = (selectedPage) => {
        setPage(selectedPage);
        fetchProducts(selectedPage * 20 - 20);
    };

    return (
        <React.Fragment>
            {products.loader ? <h1>Loading....</h1> : null}

            {!products.loader && products.data.length ? (
                <div className={styles.products}>
                    {products.data.map((item) => {
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
            ) : null}

            {!products.loader && products.data.length ? (
                <div className={styles.pagination}>
                    <button
                        disabled={page === 1}
                        onClick={() => handlePageChange(page - 1)}
                    >
                        back
                    </button>
                    {[...new Array(Math.ceil(products.total / 20))].map(
                        (_, i) => (
                            <span
                                className={
                                    page === i + 1
                                        ? styles.pagination__select
                                        : ""
                                }
                                onClick={() => handlePageChange(i + 1)}
                                key={i}
                            >
                                {i + 1}
                            </span>
                        )
                    )}
                    <button
                        disabled={page === Math.ceil(products.total / 20)}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        next
                    </button>
                </div>
            ) : null}

            {!products.loader && !products.data.length ? (
                <h1>No data</h1>
            ) : null}
        </React.Fragment>
    );
}
