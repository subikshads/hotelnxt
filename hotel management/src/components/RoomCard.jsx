import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <div className="card">
      <img src={room.image} alt={room.name} />
      <div className="card-content">
        <h2>{room.name}</h2>
        <p>${room.price} / night</p>
        <Link to={`/room/${room.id}`}>View Details</Link>
      </div>
    </div>
  );
}
