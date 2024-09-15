import React from 'react';
import { Link } from 'react-router-dom';
import './styles/reviews.css'; // Styles for pixelated table and retro hover effect
import reviews from './reviews'; // Import the reviews

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
          {reviews.map((game) => (
            <tr key={game.id} className="review-row">
              <td>
                <Link to={`/review/${game.id}`}>{game.title}</Link>
              </td>
              <td>{game.platform}</td>
              <td>{renderStars(game.graphics ?? game.gameplay ?? game.story ?? 0)}</td> {/* Display stars or "Unrated" */}
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
