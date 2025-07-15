import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    navigate("/confirmation", {
      state: { ...form, bookingId, movieId: id }
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Book Your Seat</h2>
      <input name="name" placeholder="Name" required onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
      <input name="mobile" placeholder="Mobile" required onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
