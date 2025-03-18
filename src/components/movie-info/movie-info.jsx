import React, { useEffect, useState } from "react";
import "./movie-info.scss";
import MovieService from "../../services/movie-service";
import Error from "../error/error";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types";

const MovieInfo = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const movieService = new MovieService();

  useEffect(() => {
    updateMovie();
    // eslint-disable-next-line
  }, [movieId]);

  const updateMovie = () => {
    if (!movieId) {
      return;
    }
    setLoading(true);

    movieService
      .getAllDetelies(movieId)
      .then((res) => setMovie(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const errorContent = error ? <Error /> : null;
  const loadingContent = loading ? <Spinner /> : null;
  const content = !(error || loading) ? <Content movie={movie} /> : null;
  return (
    <div className="movieInfo">
      {errorContent}
      {loadingContent}
      {content}
    </div>
  );
};

//NOTE - malumotlarni type larini aniqlab beradi(propTypes)
MovieInfo.propTypes = {
  movieId: PropTypes.number,
};
export default MovieInfo;

const Content = ({ movie }) => {
  return (
    <>
      <img src={movie.poster_path} />
      <div className="hero__movie-descr">
        <h2>{movie.name}</h2>
        <p>{movie.description}</p>
      </div>
    </>
  );
};
Content.propTypes = {
  movie: PropTypes.object,
};
