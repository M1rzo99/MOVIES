import React from 'react';
import RowMoviesItem from '../row-movies-item/row-movies-item';
import MovieInfo from '../movie-info/movie-info';
import './row-movies.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MoviesDB from '../../constants/index.js';  // yoki agar named export bo'lsa: { movies }
import MovieService from '../../services/movie-service.js';



class RowMovies extends React.Component {
    state = {
      open: false,
      movies:[],
      movieId:null
    };
    movieService = new MovieService()

  onClose = () => this.setState({open:false})
  onOpen = (id) => this.setState({open: true,movieId:id})
  

  componentDidMount(){
    this.getTrendingMovies()
  }

  getTrendingMovies = ()=>{
this.movieService.getAllTranding()
.then(res =>this.setState({movies:res}))}

 


  render() {
    const { open,movies,movieId} = this.state;
    return (
      <div className="rowmovies">
        <div className="rowmovies__top">
          <div className="rowmovies__top__title">
            <img src="/tranding.svg" alt="svg" />
            <h1>Trending</h1>
          </div>
          <div className="hr" />
          <a href="#">See More</a>
        </div>

        <div className="rowmovies__lists">
          {movies.map((movie) => (
            <RowMoviesItem 
              key={movie.id} 
              movie={movie }
              onOpen={this.onOpen}
            />
          ))}
        </div>

        <Modal open={open} onClose={this.onClose}>
          <MovieInfo  movieId={movieId}/>
        </Modal>
      </div>
    );
  }
}

export default RowMovies;
