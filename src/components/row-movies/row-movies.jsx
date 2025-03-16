import React from 'react';
import RowMoviesItem from '../row-movies-item/row-movies-item';
import MovieInfo from '../movie-info/movie-info';
import './row-movies.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MoviesDB from '../../constants/index.js';  // yoki agar named export bo'lsa: { movies }
import MovieService from '../../services/movie-service.js';
import Error from '../error/error.jsx';
import Spinner from '../spinner/spinner.jsx';

class RowMovies extends React.Component {
    state = {
      loading:true,
      error:false,
      open: false,
      movies:[],
      movieId:null,
      page:2
    };
    movieService = new MovieService()

  onClose = () => this.setState({open:false})
  onOpen = (id) => this.setState({open: true,movieId:id})
  
//NOTE - ComponentDidCatch() - qandaydir xatolik bo'lsa, user ga ekranda xatolikni ko'rsatadi



// default parametr
  componentDidMount(){
    this.getTrendingMovies()
  }

  getTrendingMovies = (page)=>{

this.movieService.getAllTranding(page)
.then(res =>this.setState(({movies})=>({movies:[...movies,...res]})))
.catch(()=>this.setState({movies:true}))
.finally(()=> this.setState({loading:false}))
}

getMoreMovies =()=>{
this.setState(({page})=>({page:page+1}))
this.getTrendingMovies(this.state.page)

}

  render() {
    const {movies,loading,error,open,movieId} = this.state
  
    const errorContent = error ? <Error/> : null
  
    const loadingContent = loading ? <Spinner/> : null
    
    const content = !(error || loading) ? <Content movies={movies} onOpen={this.onOpen} />: null
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

       {errorContent}
       {loadingContent}
       {content}

       <div className='rowmovies__loadmore'>
        <button className='btn btn-secondary' onClick={this.getMoreMovies}>
          Load More
        </button>
       </div>

        <Modal open={open} onClose={this.onClose}>
          <MovieInfo  movieId={movieId}/>
        </Modal>
      </div>
    );
  }
}

export default RowMovies;

const Content=({movies,onOpen})=>{
  return(
    <>
     <div className="rowmovies__lists">
          {movies.map((movie) => (
            <RowMoviesItem 
              key={movie.id} 
              movie={movie }
              onOpen={onOpen}
            />
          ))}
        </div>
    </>
  )
}