import React from 'react';

import GenreSelection from '../GenreSelection';
import { parentPort } from 'worker_threads';

export default function Movies(props) {
    return (
        <>
            <h1>MOVIES LIST</h1>

            {
                props.data.map((movie,key) => (
                    <h1 key="key">{movie.name}</h1>    
                    
                ))
            }
         
        


        

        </>
        
    )
}


{/* 
            {<GenreSelection 
                onGenreSelect={ props.onGenreSelect } */}

            //     <div>
            //     <img src={props.data.movie.poster_url} alt=""/> 
            //  </div>