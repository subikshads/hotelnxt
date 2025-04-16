import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import User from './pages/User'; // ✅ Corrected import name (capital U)

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roomdetails/:id" element={<RoomDetails />} />
            <Route path="/book/:id" element={<Booking />} />
            <Route path="/user/:id" element={<User />} /> {/* ✅ Now using proper casing */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
