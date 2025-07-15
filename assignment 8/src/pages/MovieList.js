import React from "react";
import { Link } from "react-router-dom";
import movies from "../data";
import "./styles.css";
const MovieList = () => {
  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.image} alt={movie.title} />
          <h4>{movie.title}</h4>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
