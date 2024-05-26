import React from "react";
import styles from "../index.module.css";

export default function SliderInput({
    title,
    underlineTitle,
    state,
    onChange,
    min,
    max,
    labelMin,
    labelMax
}) {
    return (
        <React.Fragment>
            <span className={styles.title}>{title}</span>
            {state && (
                <span
                    className={styles.title}
                    style={{ textDecoration: "underline", fontSize: 15 }}
                >
                    {underlineTitle}
                </span>
            )}
            <div>
                <input
                    className={styles.slider}
                    type='range'
                    min={min}
                    max={max}
                    value={state}
                    onChange={onChange}
                />
                <div className={styles.labels}>
                    <label>{labelMin ?? min}</label>
                    <b>{state}</b>
                    <label>{labelMax ?? max}</label>
                </div>
            </div>
        </React.Fragment>
    );
}
