import {useEffect, useState} from 'react';

interface UseStateProps {
    info: string;
}

export const UseState = ({info} : UseStateProps) => {
    const [enabled, setEnabled] = useState(true);
    const Colors = ['red', 'green', 'blue', 'chocolate'];
    const [index, setIndex] = useState(0);
    const [timer, setTimer] = useState(0);
    const [readMore, setReadMore] = useState(false);



    useEffect(() => {
       const Interval = setInterval(() => {
        return setTimer( timer + 1);
       }, 1000);
       return () => clearInterval(Interval);
    }, [timer]);

    return (
        <div>
            <input type='checkbox' onChange={() => {
                setEnabled(!enabled);
            }} checked={enabled}/>
            {enabled && <div className='main'>
                <h3 onClick={() => {
                    let num = Math.random() * 5;
                    let newIndex = parseInt(String(num));
                    setIndex(newIndex);
                }} style={{color: `${Colors[index]}`}}>React useState</h3>
                <p>Timer : {timer}</p>
                <p>
                    {readMore ? info : `${info.substring(0, 100)}`}...
                    <button onClick = {() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more' }
                    </button>
                </p>
            </div>}
        </div>
    );
}