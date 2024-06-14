import React from 'react';
import './Tour.css';

const Tour = () => {
  return (
    <div className="tour-container">
      <div className="tour-card">
        <img src="https://via.placeholder.com/300x200" alt="Tour Destination" className="tour-image" />
        <div className="tour-content">
          <h2 className="tour-title">Exotic Beach Vacation</h2>
          <p className="tour-description">
            Enjoy a relaxing vacation on the pristine beaches of the Bahamas. Swim in the crystal clear waters, sunbathe on the soft sands, and explore the vibrant local culture.
          </p>
          <div className="tour-details">
            <p><strong>Duration:</strong> 7 Days</p>
            <p><strong>Price:</strong> $999 per person</p>
          </div>
          <button className="tour-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Tour;
