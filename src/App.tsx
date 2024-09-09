import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameReviewsPage from './GameReviewsPage'; // List of reviews page
import GameReviewPage from './GameReviewPage'; // Single review page
import HomePage from './HomePage'; // Home page

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<GameReviewsPage />} />
        <Route path="/review/:game_id" element={<GameReviewPage />} /> {/* Route with game_id */}
      </Routes>
    </Router>
  );
};

export default App;
