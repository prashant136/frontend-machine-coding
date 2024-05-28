import { useMemo, useState } from "react";
import useCustomMemo from "./use-custom-memo";

export default function Polyfill() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const squaredValue = () => {
        console.log("Expensive Calculation....");
        let startTime = performance.now();
        while (performance.now() - startTime < 500) {
            // Do nothing for 500 ms to emulate extremely slow code
        }
        return counter * counter;
    };

    const memoisedSquaredValue = useCustomMemo(squaredValue, [counter]);
    // const memoisedSquaredValue = useMemo(() => squaredValue(), [counter]);

    return (
        <div className='App'>
            <h2>Counter: {counter}</h2>
            <h2>Squared Counter: {memoisedSquaredValue}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <h2>Counter 2: {counter2}</h2>
            <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
        </div>
    );
}
