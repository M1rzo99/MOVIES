import React from 'react'
import './hero.scss'
import MovieService from '../../services/movie-service'


 class Hero  extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:null,
      description:null,
      thumbnail:null,
      id:null
    }
    this.movieService  = new MovieService
    this.getMovie()
  }

  getMovie = () =>{
    this.movieService.getRandomMovies().then(res=> this.setState(res))
  }
render(){
  const {name,description,thumbnail} = this.state
  return (
    <div className='hero'>
        <div className='hero__info'>
            <h2>FIND MOVIES</h2>
            <h1>TV shoes and more</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Architecto nemo nostrum cumque tenetur est sapiente dolor ex,
                  repellat ratione excepturi nam amet pariatur ab. Culpa, laborum. L
                  abore doloremque maiores recusandae minus tempore, consequuntur molestias eos ipsa,
                   assumenda nobis necessita
                   electus fugit eum incidunt ea?
                   </p>
                   <button className='btn btn-primary'>Details</button>
        </div>
        <div className='hero__movie'>
        <img src={thumbnail} />
        <div className='hero__movie-descr'>
            <h2>{name}</h2>
            <p>{description && description.length>= 250 ? `${description.slice(0,250)}...` : description} </p>
                 <div>
                 <button className='btn btn-secondary'>Random Movies</button>
                 <button className='btn btn-primary'>Deteils</button>
                 </div>
        </div>
        </div>
    </div>
  )
}
}
export default Hero
