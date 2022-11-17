import { useState, useMemo } from 'react';

export const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [heading, setHeading] = useState('Test heading');
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const increment = () => {
        setCount((c) => c + 1);
    };

    /*
    if you are not using the useMemo hook then
    each time we will click the "Change Headings" button
    it will execute the "calculation" method as-well
    */
    const changeHeading = () => {
        setHeading('Hello to useMemo Hook');
    }

    return (
        <>
            <h2>{heading}</h2>
            <button onClick={changeHeading}>Change Headings</button>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </>
    );
}

const expensiveCalculation = (num:number) => {
    console.log('Calculating.....');
    for(let i = 0; i < 100000000; i++) {
        num += 1;
    }
    return num;
};