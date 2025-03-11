import React from 'react'
import './hero.scss'
import MovieService from '../../services/movie-service'
import Spinner from '../spinner/spinner'
import Error from '../error/error'


 class Hero  extends React.Component {
  constructor(props){
    super(props)
    this.state={
    movie:{},
    loading:true,
    error:false
    }
     this.movieService  = new MovieService
  }

  componentDidMount(){
    this.UpdatetMovie()
  }


  UpdatetMovie = () => {
    this.setState({loading:true})
  this.movieService.getRandomMovies()
    .then(res => this.setState({ movie: res, loading: false, error: false })) // muvaffaqiyatli olib, loadingni false va errorni false qilib yangilaymiz
    .catch(() => this.setState({ error: true, loading: false })) // xato bo'lsa, errorni true va loadingni false qilib yangilaymiz
    .finally(()=>this.setState({loading:false}))
}

render(){
  const {movie,loading,error} = this.state
  
  const errorContent = error ? <Error/> : null

  const loadingContent = loading ? <Spinner/> : null
  
  const content = !(error || loading) ? <Content movie={movie}/>: null

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
                  <div>
                  <button className='btn btn-primary'>Details</button>
                  <button className='btn btn-secondary' onClick={this.UpdatetMovie}>Random Movie</button>
                  </div>
        </div>
        <div className='hero__movie'>
          {errorContent}
          {loadingContent}
          {content}
        </div>
    </div>
  )
}
}
export default Hero

const Content=({movie})=>{
  return(
    <>
    <img src={movie.poster_path} />
        <div className='hero__movie-descr'>     
            <h2>{movie.name}</h2>
            <p>{movie.description && movie.description.length >= 250 
            ? `${movie.description.slice(0,250)}...` 
            : movie.description} 
            </p>
                 <button className='btn btn-primary'>Deteils</button>
        </div>
    </>
  )
}
