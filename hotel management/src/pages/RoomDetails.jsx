import { useParams, Link } from "react-router-dom";

export default function RoomDetails() {
  const { id } = useParams();

  // Ideally, fetch by ID from data, but we’ll use a placeholder for now:
  const room = {
    id,
    name: "Ocean View",
    description: "Experience serenity with a stunning ocean view from your private balcony. This luxury room includes a king-sized bed, high-speed Wi-Fi, and complimentary breakfast.",
    price: 120,
    image: "https://tse4.mm.bing.net/th?id=OIP.qkDDSZ9A_botpQKZbYkadAHaE8&pid=Api&P=0&h=180"
  };

  return (
    <div className="room-details-container">
      <div className="room-details-card">
        <img src={room.image} alt={room.name} className="room-details-image" />
        <div className="room-details-content">
          <h1 className="room-details-title">{room.name}</h1>
          <p className="room-details-description">{room.description}</p>
          <p className="room-details-price"><strong>Price:</strong> ${room.price} / night</p>
          <Link to={`/book/${room.id}`}>
            <button className="room-details-button">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
