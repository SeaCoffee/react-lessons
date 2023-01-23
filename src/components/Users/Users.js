import {useEffect, useState} from "react";
// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
const Users = () => {

    const[todo, setTodo] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json)
            .then(json => setTodo(json))
    }, [])
    console.log(todo)

    // відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
  return (
      <div>
          {todo && <h2>{todo.name}</h2>}
          {todo && <h2>{todo.id}</h2>}
      </div>
  );
};

export {Users};