import {useEffect, useLayoutEffect, useState} from 'react';

interface UseEffectComponentProps {
    title: string;
}

export default function UseEffectComponent ({title}:UseEffectComponentProps) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setData(data));
        console.log(data);
    }, []);

    useLayoutEffect(() => {
        console.log('will print before render');
    }, [])

    if(data.length === 0) {
       return (
        <>
            <h2>loading...</h2>
        </>
       );
    }
    return (
        <div className="main-container">
            <h2>{title}</h2>
            {data.map(user => {
                return (
                    <SingleUser {...user as SingleUserProps}  />
                );
            })}
        </div>
    );
}

interface SingleUserProps {
    user: {
        username: string;
        email: string;
    };
    username: string;
    email: string;
}


const SingleUser = ({username, email}: SingleUserProps) => {
    return (
        <>
            <p>{username} - {email}</p>
        </>
    );
}