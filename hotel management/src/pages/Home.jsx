import RoomCard from "../components/RoomCard";
import "../styles/style.css";

const rooms = [
  { id: 1, name: "Ocean View", price: 120, image: "https://tse4.mm.bing.net/th?id=OIP.qkDDSZ9A_botpQKZbYkadAHaE8&pid=Api&P=0&h=180" },
  { id: 2, name: "Mountain Retreat", price: 150, image: "https://tse2.mm.bing.net/th?id=OIP.3yeWp1C623r8Rd8Rr4qK2QHaFj&pid=Api&P=0&h=180" },
];

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Hotelify</h1>
      <p className="home-subtitle">Choose your perfect stay from our exclusive rooms</p>
      
      <div className="room-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
