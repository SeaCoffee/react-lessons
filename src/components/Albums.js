import React, {useEffect, useState} from 'react';
import {Album} from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(json => setAlbums(json))}, []
    )

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}

        </div>
    );
};

export  {Albums}