import {createRef, useReducer} from 'react';
function MyComponent() {

    const reducer = (state, action) =>  {
        switch (action.type) {
            case 'ADD':
                return {...state, id: action.id, name: action.name}

            default:
                return state
        }
    }

            const action = {
        type: 'add',
        cat: {
            name: ''

        }
    };

    const initState = () =>  ({cats: [], dogs:[]})

    const[state, dispatch] = useReducer(reducer, "", initState)


    let cat = createRef()


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(cat.current.value)


    }




    return (

        <div>
            <form onSubmit={onSubmit}>

           <input type="text" name={"Cat"} ref={cat}/>
            </form>
            <button>add cat</button>
            {/*<div>Cats: {state.cats}</div>*/}
            {/*<button onClick={()=>dispatch({type:"CatsCount"})}>count</button>*/}
        </div>
    );
}


export {MyComponent}