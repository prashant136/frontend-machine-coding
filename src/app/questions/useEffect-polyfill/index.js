import { useEffect, useState } from "react";
import useCustomEffect from "./use-custom-effect";

export default function UseEffectPolyfill() {
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);

    useCustomEffect(() => {
        console.log("useEffect triggered 👋", count);
        async function fetchPost() {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const json = await res.json();
            setPosts(json);
        }
        fetchPost();

        return () => {
            console.log("cleanup 🚩");
        };
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
