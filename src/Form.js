import {App} from "./App";

const Form = () => {
function catSubmit(event){
    event.preventDefault()


    const catsData = {
        state: event.target.event.value
    }
    console.log(catsData)

}

        return <form onSubmit={catSubmit}>

        </form>
    }


// <div>
//     <input type="text" />
//     <button onClick={() => dispatch({type:'add'})}>
//         {/*(newState = reducer(state, action))*/}
//         ADD NEW CAT
//     </button>
// </div>


export {Form}