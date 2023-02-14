import {createRef, useReducer} from 'react';
function MyComponent() {

    const reducer = (state, action) =>  {
        switch (action.type) {
            case 'ADD':
                return {...state, payload: action.payload}

            default:
                return state
        }
    }

        //     const action = {
        // type: 'add',
        // cat: {
        //     name: ''
        //
        // }
    // };

    const state = () =>  ({cats: [], dogs:[]})

    const[state, dispatch] = useReducer(reducer, "", initState)


    let cats = createRef()


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(cats.current.value)


    }




    return (

        <div>
            <form onSubmit={onSubmit}>

           <input type="text" name={"Cat"} ref={cats} onChange={(e) =>
               dispatch({payload: cats.current.value})
           }/>
            </form>
            <button>add cat</button>
            {/*<div>Cats: {state.cats}</div>*/}
            {/*<button onClick={()=>dispatch({payload: e.cat.current.value})}>count</button>*/}
        </div>
    );
}


export {MyComponent}