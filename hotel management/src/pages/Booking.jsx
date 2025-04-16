import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/stylu.css";


export default function Booking() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", email: "", dates: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Booking confirmed for ${form.name} on Room ID: ${id}`);
    // You could reset the form after submitting if you like:
    // setForm({ name: "", email: "", dates: "" });
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h2 className="booking-title">Book Room {id}</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="dates"
            placeholder="Booking Dates (e.g. 10-12 April)"
            value={form.dates}
            onChange={handleChange}
            required
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}
