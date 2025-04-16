import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiEdit, FiLock, FiHeart, FiClock, FiStar, FiLogOut } from 'react-icons/fi';
import { FaAirbnb, FaHotel, FaUmbrellaBeach } from 'react-icons/fa';
import '../styles/profile.css';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('personal');
  const [editMode, setEditMode] = useState(false);
  
  const [userData, setUserData] = useState({
    name: 'SUBI',
    email: 'subi123@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    dob: '1990-05-15',
    password: '********'
  });

  const bookings = [
    { id: 1, hotel: 'Grand Plaza Hotel', date: '2023-06-15', status: 'Completed', price: '$320', type: 'hotel' },
    { id: 2, hotel: 'Beachfront Villa', date: '2023-07-22', status: 'Upcoming', price: '$450', type: 'villa' },
    { id: 3, hotel: 'Mountain View Resort', date: '2023-08-10', status: 'Cancelled', price: '$280', type: 'resort' }
  ];

  const favorites = [
    { id: 1, name: 'Luxury Suite at Marina Bay', rating: 4.8, price: '$380/night', type: 'hotel' },
    { id: 2, name: 'Private Island Retreat', rating: 4.9, price: '$1200/night', type: 'villa' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditMode(false);
    // API call to save data would go here
    alert('Profile updated successfully!');
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'hotel': return <FaHotel className="booking-icon hotel" />;
      case 'villa': return <FaUmbrellaBeach className="booking-icon villa" />;
      case 'resort': return <FaAirbnb className="booking-icon resort" />;
      default: return <FaHotel className="booking-icon" />;
    }
  };

  return (
    <div className="hotelify-profile">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="avatar-container">
          <div className="avatar">
            <FiUser size={32} />
          </div>
          <div className="user-info">
            <h2>{userData.name}</h2>
            <p>Member since June 2022</p>
            <div className="member-tier">
              <FiStar className="gold-icon" />
              <span>Gold Member</span>
            </div>
          </div>
        </div>
        <button className="logout-btn">
          <FiLogOut /> Sign Out
        </button>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        {/* Navigation Tabs */}
        <div className="profile-tabs">
          <button 
            className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Info
          </button>
          <button 
            className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            My Bookings
          </button>
          <button 
            className={`tab-btn ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'personal' && (
            <div className="personal-info">
              <div className="section-header">
                <h3>Personal Information</h3>
                <button 
                  className="edit-btn"
                  onClick={() => setEditMode(!editMode)}
                >
                  <FiEdit /> {editMode ? 'Cancel' : 'Edit'}
                </button>
              </div>
              
              <form onSubmit={handleSave}>
                <div className="form-grid">
                  <div className="form-group">
                    <label><FiUser /> Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label><FiMail /> Email</label>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label><FiPhone /> Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label><FiMapPin /> Address</label>
                    <input
                      type="text"
                      name="address"
                      value={userData.address}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label><FiCalendar /> Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={userData.dob}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label><FiLock /> Password</label>
                    <input
                      type="password"
                      name="password"
                      value={userData.password}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                    {editMode && <small>Leave blank to keep current password</small>}
                  </div>
                </div>
                
                {editMode && (
                  <div className="form-actions">
                    <button type="submit" className="save-btn">
                      Save Changes
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="bookings-list">
              <h3>Booking History</h3>
              {bookings.map(booking => (
                <div key={booking.id} className={`booking-card ${booking.status.toLowerCase()}`}>
                  <div className="booking-icon-container">
                    {getTypeIcon(booking.type)}
                  </div>
                  <div className="booking-info">
                    <h4>{booking.hotel}</h4>
                    <div className="booking-meta">
                      <span><FiCalendar /> {booking.date}</span>
                      <span className={`status ${booking.status.toLowerCase()}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="booking-price">
                    {booking.price}
                    {booking.status === 'Upcoming' && (
                      <button className="manage-btn">Manage</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="favorites-list">
              <h3>Saved Properties</h3>
              {favorites.length > 0 ? (
                <div className="favorites-grid">
                  {favorites.map(favorite => (
                    <div key={favorite.id} className="favorite-card">
                      <div className="favorite-image">
                        {/* Image would go here */}
                        <div className="placeholder-img"></div>
                        <button className="heart-btn">
                          <FiHeart className="filled" />
                        </button>
                      </div>
                      <div className="favorite-details">
                        <h4>{favorite.name}</h4>
                        <div className="rating">
                          <FiStar className="star" />
                          <span>{favorite.rating}</span>
                        </div>
                        <div className="price">{favorite.price}</div>
                        <button className="book-btn">Book Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <FiHeart size={48} className="empty-icon" />
                  <p>You haven't saved any properties yet</p>
                  <button className="explore-btn">Explore Hotels</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}