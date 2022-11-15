import { useEffect, useRef, useState } from "react";

export const SelectingEl = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus(); // focus on page load
        }
    }, [])
   const logMessage = (e: any) => {
        e.preventDefault();
        if(inputRef.current) {
            inputRef.current.focus(); // focus on submitting the form
        }
        console.log({
            fName,
            lName
        });
    }
    return (
        <>
            <h2>Selecting Element using useRef hook</h2>
            <form onSubmit={logMessage.bind(this)}>
                <label htmlFor = 'fName'>First Name:</label>
                <input onChange={(e) => setFname(e.target.value)} ref = {inputRef} type='text' name='fName' value={fName} /><br />
                <label htmlFor = 'lName'>Last Name:</label>
                <input onChange={(e) => setLname(e.target.value)} type='text' name='lName' value={lName} /><br />
                <button>Submit</button>
            </form>
        </>
    );
}