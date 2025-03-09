import React from 'react';
import RowMoviesItem from '../row-movies-item/row-movies-item';
import MovieInfo from '../movie-info/movie-info';
import './row-movies.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MoviesDB from '../../constants/index.js';  // yoki agar named export bo'lsa: { movies }

class RowMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  onToggleOpen = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  render() {
    const { open } = this.state;
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
          {MoviesDB.map((movie, idx) => (
            <RowMoviesItem 
              key={idx} 
              movie={{ ...movie, index: idx }}
              onToggleOpen={this.onToggleOpen}
            />
          ))}
        </div>

        <Modal open={open} onClose={this.onToggleOpen}>
          <MovieInfo />
        </Modal>
      </div>
    );
  }
}

export default RowMovies;
