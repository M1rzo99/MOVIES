import React, { useEffect, useState } from "react";
import RowMoviesItem from "../row-movies-item/row-movies-item";
import MovieInfo from "../movie-info/movie-info";
import "./row-movies.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MoviesDB from "../../constants/index.js"; // yoki agar named export bo'lsa: { movies }
import MovieService from "../../services/movie-service.js";
import Error from "../error/error.jsx";
import Spinner from "../spinner/spinner.jsx";
import propTypes from "prop-types";
import useMovieService from "../../services/movie-service.js";

const RowMovies = () => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [page, setPage] = useState(2);
  const [newItemLoading, setNewItemLoading] = useState(false);

  const { getAllTranding, loading, error } = useMovieService();

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);

  const onClose = () => setOpen(false);

  const onOpen = (id) => {
    setMovieId(id);
    setOpen(true);
  };

  const getMovies = (pageNum) => {
    setNewItemLoading(true);
    getAllTranding(pageNum).then((res) => {
      setMovies((prevMovies) => {
        // Takroriy filmlar oldini olish uchun Set dan foydalanamiz
        const uniqueMovies = [...prevMovies, ...res].reduce((acc, movie) => {
          acc.set(movie.id, movie);
          return acc;
        }, new Map());

        return Array.from(uniqueMovies.values()); // Faqat unikal filmlar qoladi
      });
      setNewItemLoading(false);
    });
  };

  const getMoreMovies = () => {
    setNewItemLoading(true);
    setPage((page) => page + 1);
    getMovies(page);
  };

  const errorContent = error ? <Error /> : null;

  const loadingContent = loading ? <Spinner /> : null;

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
      <Content movies={movies} onOpen={onOpen} />

      <div className="rowmovies__loadmore">
        <button
          className="btn btn-secondary"
          onClick={getMoreMovies}
          disabled={newItemLoading}
        >
          Load More
        </button>
      </div>

      <Modal open={open} onClose={onClose}>
        <MovieInfo movieId={movieId} />
      </Modal>
    </div>
  );
};

export default RowMovies;

const Content = ({ movies, onOpen }) => {
  return (
    <div className="rowmovies__lists">
      {movies.map((movie, index) => (
        <RowMoviesItem
          key={movie.id ? `movie-${movie.id}` : `index-${index}`}
          movie={movie}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
};
Content.propTypes = {
  movies: propTypes.array,
  onOpen: propTypes.func,
};
