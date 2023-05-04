import { useState, useEffect } from "react";

interface User {
    name: string;
    id: number;
}

export function UseEffect() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(userData => setUsers(userData));
        console.log(users);
    }, []);

    const logName = (name: string, id: number) => {
        console.log(name, id);
    }

    if(users.length === 0) {
        return (
         <>
             <h2>loading...</h2>
         </>
        );
     }

    return (
        <div>
            <ul>
                {users.map((user: User) => <li onClick={() => logName(user.name, user.id)} key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}
