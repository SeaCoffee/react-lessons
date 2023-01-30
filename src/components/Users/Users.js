import {useEffect, useState} from "react";
import User from './User/User'

const Users = () => {
    const [count, setCount] = useState([])

    useEffect(() => {

        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => setCount(json))}, []
    )

    return (
        <div>
            {count.map(user => <User key ={user.id} user={user}/>)}
        </div>
    );
};

export {Users};