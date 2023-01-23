import {useEffect, useState} from "react";

const Users = () => {

    const[todo, setTodo] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json)
            .then(json => setTodo(json))
    }, [])
    console.log(todo)


  return (
      <div>
        App
      </div>
  );
};

export {Users};