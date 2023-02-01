import {useForm} from "react-hook-form";

const Comments = () => {



    let {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
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

           <input {register('comments')}/>

           <input type='submit' value={'save comment'}/>




       </form>
      </div>

  );

}
export {Comments};