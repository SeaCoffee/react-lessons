import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <Link to='.'>Home</Link>


                <Link to="/about">About</Link>


                <Link to="/contacts">Contacts</Link>

            <Link to="/todos">Todos</Link>

            <Link to="/albums">Albums</Link>

            <Link to="/comments">Comments</Link>

            <Link to="comments/:commentId">SingleComment</Link>




        </nav>
    );
};

export default Menu;