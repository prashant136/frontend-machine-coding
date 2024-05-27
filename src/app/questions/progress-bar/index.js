import React, { useEffect, useState } from "react";
import "./style.css";
import ProgressComp from "./ProgressComp";

export default function ProgressBar() {
    const [value, setValue] = useState(25);

    useEffect(() => {
        let timer = setInterval(() => {
            setValue((val) => val + 1);
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='app'>
            <span>Progress Bar</span>
            <ProgressComp value={value} />
        </div>
    );
}
