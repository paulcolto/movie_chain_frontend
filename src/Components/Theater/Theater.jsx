import React from 'react';
import Header from '../Header';
import NowPlaying from '../NowPlaying';
import PlayingToday from '../PlayingToday';
import UpcomingMovies from '../UpcomingMovies';

export default function Theater(props) {

    return (
        <>

            <Header
               slug={ props.slug }
                />
            {
                props.data.map((theater,key) => (
                    <h3 key="key">{theater.name}</h3>    
                    
                ))
            }

  
        </>
        
    )
}