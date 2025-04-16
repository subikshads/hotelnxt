import { Link } from "react-router-dom";
import { FiHome, FiUser, FiHeart, FiBookOpen } from "react-icons/fi";
import "../styles/style.css";

export default function Navbar() {
  return (
    <nav className="sidebar-navbar">
      <div className="navbar-logo">
        <Link to="/"> Hotelify</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <FiHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/book/1">
            <FiBookOpen className="nav-icon" /> My Bookings
          </Link>
        </li>
        <li>
          <Link to="/roomdetails/1">
            <FiHeart className="nav-icon" /> Room Details
          </Link>
        </li>
        <li>
          <Link to="/user/1">
            <FiUser className="nav-icon" /> User
          </Link>
        </li>
      </ul>
    </nav>
  );
}
