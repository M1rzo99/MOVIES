import React, { useEffect, useState } from "react";
import "./hero.scss";
import MovieService from "../../services/movie-service";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import PropTypes from "prop-types";
import useMovieService from "../../services/movie-service";
import { useNavigate } from "react-router";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const { getRandomMovies, error, loading, clearError } = useMovieService();

  useEffect(() => {
    UpdatetMovie();
    // eslint-disable-next-line
  }, []);

  const UpdatetMovie = () => {
    clearError();
    getRandomMovies().then((res) => setMovie(res));
  };

  const errorContent = error ? <Error /> : null;

  const loadingContent = loading ? <Spinner /> : null;

  const content = !(error || loading || !movie) ? (
    <Content movie={movie} />
  ) : null;

  return (
    <div className="hero">
      <div className="hero__info">
        <h2>FIND MOVIES</h2>
        <h1>TV shoes and more</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          nemo nostrum cumque tenetur est sapiente dolor ex, repellat ratione
          excepturi nam amet pariatur ab. Culpa, laborum. L abore doloremque
          maiores recusandae minus tempore, consequuntur molestias eos ipsa,
          assumenda nobis necessita electus fugit eum incidunt ea?
        </p>
        <div>
          <button className="btn btn-secondary" onClick={UpdatetMovie}>
            Random Movie
          </button>
        </div>
      </div>
      <div className="hero__movie">
        {errorContent}
        {loadingContent}
        {content}
      </div>
    </div>
  );
};
export default Hero;

const Content = ({ movie }) => {
  let navigate = useNavigate();
  return (
    <>
      <img src={movie.poster_path} />
      <div className="hero__movie-descr">
        <h2>{movie.name}</h2>
        <p>
          {movie.description && movie.description.length >= 250
            ? `${movie.description.slice(0, 250)}...`
            : movie.description}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          Deteils
        </button>
      </div>
    </>
  );
};

Content.propTypes = {
  movie: {
    backdrop_path: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  },
};
