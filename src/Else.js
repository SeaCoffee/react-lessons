import {useReducer} from "react";


const reducer = (state, action) =>  {
    switch (action.type){

        case 'ADD':
            return{...state, cats:[...state.cats, action.payload]}

        default:
            return{...state}

    }

}

const Else = () => {

    const[state, dispatch] = useReducer(reducer, {cats: [], dogs:[]})

    const handlerClick = () => {
        dispatch({
            type: "ADD",
            payload: {cats.input.current.value}
        } )
}



    return (
        <div>
            <input type="text" value={}/>

            <button onClick={handlerClick}>коты{state.cats}</button>
        </div>
    );
};

export {Else};