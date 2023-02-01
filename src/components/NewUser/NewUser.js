import {useEffect, useState} from "react";
import React from 'react';
import {useForm} from "react-hook-form";

const NewUser = () => {



    let {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {register('name', 'password')}/>

                <input type='submit' value={'register'}/>




            </form>
        </div>

    );

}

export {NewUser}


