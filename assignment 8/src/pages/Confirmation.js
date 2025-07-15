import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import movies from "../data";

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No booking data found!</p>;

  const movie = movies.find((m) => m.id === parseInt(state.movieId));

  return (
    <div style={{ padding: 20 }}>
      <h2>Seat Booked Successfully!</h2>
      <p><strong>Booking ID:</strong> #{state.bookingId}</p>
      <p><strong>Movie:</strong> {movie.title}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
      <button onClick={() => navigate("/")}>Back to Movies</button>
    </div>
  );
};

export default Confirmation;
