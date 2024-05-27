import React, { useState, useEffect } from "react";
import "./style.css";

export default function ProgressComp({ value = 0 }) {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));
    }, [value]);

    return (
        <div className='progress'>
            <span style={{ color: percent > 50 ? "white" : "black" }}>
                {percent.toFixed(0)}%
            </span>
            {/* adding assecebility */}
            <div
                // style={{ width: `${percent}%` }}
                // if interviewer asked to optimized further
                style={{
                    transform: `scaleX(${percent / 100})`,
                    transformOrigin: "left"
                }}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
                role='progressbar'
            ></div>
        </div>
    );
}
