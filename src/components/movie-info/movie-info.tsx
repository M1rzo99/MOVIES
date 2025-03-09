import React from 'react'
import './movie-info.scss'

const MovieInfo = () => { 
  return (
    <div className='movieInfo'>
      <img src="/image1.svg" alt="movie" />
       <div className='movieInfo-descr'>
        <h2>Movie title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quo error, dolores culpa vel nostrum temporibus incidunt 
          velit! Porro veritatis fugit illo nam repudiandae! Eligendi 
          est consequuntur nam velit! Molestiae, dolores!</p>
       </div> 
    </div>
  )
}

export default MovieInfo
