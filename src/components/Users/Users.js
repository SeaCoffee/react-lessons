import {useEffect, useState} from "react";

const Users = () => {
    const [count, setCount] = useState([])

    useEffect(() => {

        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => setCount(json))}, []
    )

    return (
        <div>
            App
        </div>
    );
};

export {Users};