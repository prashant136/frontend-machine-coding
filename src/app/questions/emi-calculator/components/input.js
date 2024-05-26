import React from "react";
import styles from "../index.module.css";

export default function TextInput({ title, state, onChange }) {
    return (
        <React.Fragment>
            <span className={styles.title}>{title}</span>
            <input
                type='number'
                value={state}
                onChange={onChange}
                placeholder={title}
            />
        </React.Fragment>
    );
}
