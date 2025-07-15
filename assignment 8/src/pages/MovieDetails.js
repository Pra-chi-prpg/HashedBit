import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "../data";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
