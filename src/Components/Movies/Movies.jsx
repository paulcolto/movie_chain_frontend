import React from 'react';

import GenreSelection from '../GenreSelection';
//import { parentPort } from 'worker_threads';

export default function Movies(props) {
    return (
        <>
            <h1>MOVIES LIST</h1>
 
            {
    props.data.map((item,key) => (
        <h1 key="key">{item.name}</h1>
        // <div>
        //     <img src={item.poster_url} alt={item.name}/>
        // </div>    
        
    ))
}
         
        


        

        </>
        
    )
}


