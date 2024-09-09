import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Game Review Site</h1>
      <p>Check out our latest game reviews:</p>
      {/* Link to the game reviews page */}
      <Link to="/reviews">See the Game Reviews</Link>
    </div>
  );
};

export default HomePage;
