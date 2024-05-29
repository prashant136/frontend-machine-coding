import React, { useRef, useState } from "react";
import "./style.css";

function Box({ filled, onClick, isDisable }) {
    return (
        <button
            onClick={onClick}
            className={filled ? "cell cell-activate" : "cell"}
            disabled={isDisable}
        ></button>
    );
}

export default function GridLight() {
    const [order, setOrder] = useState([]);
    const config = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ];

    const activateCell = (index) => {
        const newOrder = [...order, index];
        setOrder(newOrder);

        if (
            newOrder.length ===
            config.flat(1).filter((item) => item === 1).length
        ) {
            deactiveCell();
        }
    };

    const deactiveCell = () => {
        const timer = setInterval(() => {
            setOrder((prev) => {
                const newArr = [...prev];
                newArr.pop();
                if (newArr.length === 0) {
                    clearInterval(timer);
                }
                return newArr;
            });
        }, 300);
    };

    return (
        <div className='wrapper'>
            <div className='grid'>
                {config.flat(1).map((item, index) => {
                    return item ? (
                        <Box
                            key={index}
                            filled={order.includes(index)}
                            onClick={() => activateCell(index)}
                            isDisable={order.includes(index)}
                        />
                    ) : (
                        <span></span>
                    );
                })}
            </div>
        </div>
    );
}
