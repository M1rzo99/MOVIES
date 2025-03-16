import React from 'react'
import './movie-info.scss'
import MovieService from '../../services/movie-service'
import Error from '../error/error';
import Spinner from '../spinner/spinner';
import PropTypes from 'prop-types';

class MovieInfo extends React.Component { 
  state={
    movie:null,
    loading:true,
    error:false
  }
  movieService = new MovieService();

  componentDidMount(){
    this.updateMovie()
  }
componentDidUpdate(prevProps){
if(this.props.movieId !== prevProps.movieId){
  this.updateMovie()
}
  
}
  updateMovie = () =>{
    const {movieId} = this.props
    if(!movieId){
      this.setState({error:true})
    }
    this.movieService
    .getAllDetelies(movieId)
    .then(res=> this.setState({movie:res}))
    .catch(()=>this.setState({error:true}))
    .finally(()=> this.setState({loading:false}))
  }


 render(){
  const {movie,loading,error} = this.state
  
  const errorContent = error ? <Error/> : null

  const loadingContent = loading ? <Spinner/> : null
  
  const content = !(error || loading) ? <Content movie={movie}/>: null
  return (
    <div className='movieInfo'>
      {errorContent} 
      {loadingContent}
      {content}
    </div>
  )
 }
}
//NOTE - malumotlarni type larini aniqlab beradi(propTypes)
MovieInfo.propTypes={
  movieId: PropTypes.number
}
export default MovieInfo

const Content=({movie})=>{
  return(
    <>
    <img  src={movie.poster_path} />
        <div className='hero__movie-descr'>     
            <h2>{movie.name}</h2>
            <p>{movie.description} 
            </p>
            
        </div>
    </>
  )
}
Content.propTypes={
  movie: PropTypes.object
}