import './row-movies.scss'
import React from 'react'

const RowMovies = () => {
  return (
    <div className='rowmovies'>
     <div className='rowmovies__top'>
        <div className='rowmovies__top__title'>
            <img src="/tranding.svg" alt="svg" />
            <h1>Trending</h1>
        </div>
        <div className='hr'/>
        <a href="#">See More</a> 
     </div>
     <div className='rowmovies__lists'>
        
     </div>
    </div>
  )
}

export default RowMovies
