import { useState } from "react";

type TimerProps = {
    title: string;
}

export const Timer = ({title}: TimerProps) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick = {() => setCount(count + 1)}>Increment</button>
            <button onClick = {() => count <= 0 ? setCount(0) : setCount(count -1)}>Decrement</button>
        </>
    );
}