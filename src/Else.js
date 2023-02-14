import {useReducer} from "react";
import {Form} from "./Form";

const App = () => {


    const reducer = (state, action) =>  {
        switch (action.type){

            case 'CatsCount':
                return{...state, cats: state.dogs +1}
            case 'DogsCount':
                return{...state, dogs: state.dogs + 1}
            default:
                return{...state}

        }

    }

    const initValue = () =>  ({cats: [], dogs:[]})



    const[state, dispatch] = useReducer(reducer, "", initValue)



    return (
        <div>



            <div>Cats: {state.cats}</div>
            <button onClick={()=>dispatch({type:"CatsCount"})}>count</button>
            <div>Dogs: {state.dogs}</div>
            <button onClick={()=>dispatch({type:"DogsCount"})}>count</button>
        </div>
    );
};

export {App};