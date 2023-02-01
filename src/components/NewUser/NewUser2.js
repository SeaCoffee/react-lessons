import {useState} from "react";

const NewUser2 = () => {
    let [registerForm, setregisterForm] = useState({login: '', password: ''})

    const onSubmit = (e) => {
        console.log(e.target.login.value);
        console.log(e.target.password.value)
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(e),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    const onChange = (e) => {
        setregisterForm(...registerForm, {[e.target.name]: e.target.value})

    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'login'} value={registerForm.login} onChange={onChange}/>
                <input type="text" name={'password'} value={registerForm.password} onChange={onChange}/>
                <button>register</button>
            </form>

        </div>
    );
};


export {NewUser2};