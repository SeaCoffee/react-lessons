import React, {useEffect, useState} from 'react';
import {Comment} from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => setComments(json))}, []
    )

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default Comments;