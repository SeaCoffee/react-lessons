import React, {useEffect, useState} from 'react';
import {Todo} from "./Todo";


const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => setTodos(json))}, []
    )

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}

        </div>
    );
};

export default Todos;