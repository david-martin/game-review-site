import React from 'react';
import { Link } from 'react-router-dom';
import './styles/reviews.css'; // Styles for pixelated table and retro hover effect

// Example list of reviewed games (this could come from an API or state later)
const gameReviews = [
  { id: 'c64-3d-pinball', title: '3D Pinball', platform: 'C64', overallRating: 4 },
  { id: 'nes-super-mario', title: 'Super Mario Bros', platform: 'NES', overallRating: 5 },
  { id: 'snes-chrono-trigger', title: 'Chrono Trigger', platform: 'SNES', overallRating: 5 },
  { id: 'unrated-game-example', title: 'Some Unfinished Game', platform: 'PS4', overallRating: null },
];

const GameReviewsPage: React.FC = () => {
  return (
    <div className="reviews-container">
      <h1>Game Reviews</h1>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Game</th>
            <th>Platform</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {gameReviews.map((game) => (
            <tr key={game.id} className="review-row">
              <td>
                <Link to={`/review/${game.id}`}>{game.title}</Link>
              </td>
              <td>{game.platform}</td>
              <td>{renderStars(game.overallRating)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const renderStars = (rating: number | null | undefined) => {
    // If rating is undefined or null, return "Unrated"
    if (rating === undefined || rating === null) {
      return <span className="unrated-label">Unrated</span>;
    }
  
    // Otherwise, render the stars
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className={i < rating ? 'star full' : 'star empty'}>★</span>);
    }
    return stars;
  };
  
export default GameReviewsPage;
