import React from 'react';
import GenreSelection from '../GenreSelection';
export default function Movies(props) {
   return (
       <>
       <div className="movies">
           <h1>MOVIES LIST</h1>
           {
               props.data.map((item,key) => (
                   <>
                   <h2 key="key">{item.name}</h2>
                   <div className="poster">
                   <img src={item.poster_url} alt={item.name}/>
                   </div>
                   <div>
                       <p>
                       Rating: {item.rating}
                       <br></br>
                       Year: {item.year}
                       <br></br>
                       Genre: {item.genre}
                       </p>
                   </div>
                   </>
               ))
           }
           </div>
       </>
   )
}