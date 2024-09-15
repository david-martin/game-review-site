import React from 'react';
import { Link } from 'react-router-dom';
import './styles/reviews.css'; // Styles for pixelated table and retro hover effect
import { calculateAverageRating } from './utils/reviews';
import reviews from './data/reviews';
import Stars from './components/reviews/stars';
import NavBar from './components/navbar/navbar';

const GameReviewsPage: React.FC = () => {
  return (
    <div className="page-container">
      <NavBar />
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
                <td>
                  <Stars rating={calculateAverageRating(game)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameReviewsPage;
