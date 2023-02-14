import {useReducer, createRef} from "react";



const New = () => {

    let cat = createRef()

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {...state, cats: state.cats[cat.action.payload]}

    }
}

const initialState = [{cats: []}]

const [state, dispatch] = useReducer(reducer, initialState)


const onSubmit  = (e)  => {
    e.preventDefault()

}




  return (
      <div>
          <form onSubmit={onSubmit}>

              <input type="text" name="name" ref={cat}/>

          </form>

          <button onClick={()=>dispatch({type: "ADD", payload:cat.current.value})}>
              Добавить, бля, кота

          </button>


      </div>
  );
};

export {New};