import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detelied-movie.scss";
import useMovieService from "../../services/movie-service";
import PropTypes from "prop-types";
import Error from "../error/error";
import Spinner from "../spinner/spinner";

const DeteliedMovie = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const { getAllDetelies, loading, error } = useMovieService();

  useEffect(() => {
    updateMovie();
    // eslint-disable-next-line
  }, [movieId]);

  const updateMovie = () => {
    if (!movieId) {
      return;
    }
    getAllDetelies(movieId).then((res) => setMovie(res));
  };

  const errorContent = error ? <Error /> : null;
  const loadingContent = loading ? <Spinner /> : null;
  const content = !(error || loading || !movie) ? (
    <Content movie={movie} />
  ) : null;
  const inititialContent = movie || loading || error ? null : <Spinner />;

  return (
    <>
      {inititialContent}
      {errorContent}
      {loadingContent}
      {content}
    </>
  );
};

export default DeteliedMovie;

const Content = ({ movie }) => {
  return (
    <div className="deteliedmovie">
      <div className="deteliedmovie__image">
        <img src={movie.poster_path} alt={movie.name} />
      </div>
      <div className="deteliedmovie__descr">
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
        <div className="deteliedmovie__descr-info">
          <img src="/date.png" alt="" />
          <p>{movie.release_date}</p>
          <div className="dot" />
          <p>{movie.vote_average}</p>
          <img src="/star.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
Content.propTypes = {
  movie: PropTypes.object,
};
