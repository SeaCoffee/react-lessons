import React, {useEffect, useState} from 'react';

const Todos = () => {
    const [todo, setTodo] = useState([])

    useEffect(fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json))
)

    return (
        <div>

        </div>
    );
};

export default Todos;