import React from 'react';
import {useParams} from "react-router";
import Comments from "./Comments";
import {Comment} from "./Comment";

const SingleComment = (comments) => {

    const params = useParams()
   console.log(params)
    return (
        <div>
            SingleComment

        </div>
    );
};

export default SingleComment;