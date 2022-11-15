import {useRef, forwardRef} from 'react'

interface ForwardRefProps {
    title: string;
}

export const ForwardRef = ({title}:ForwardRefProps) => {
    const inputRef = useRef(null);
    return (
        <>
            <h2>{title}</h2>
            <FormComponent ref={inputRef} />
            <br />
            <button onClick={() => {
                inputRef.current.focus();
            }}>Submit</button>
        </>
    );
}


export const FormComponent = ((props, ref) => {
    return (
        <>
            <label htmlFor='username'>Name: </label>
            <input ref={ref} type='text' name='username' /> <br />
            <label htmlFor='password'>Password: </label>
            <input type='text' name='password' />
        </>
    );
});

