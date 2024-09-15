import React from 'react';
import { Link } from 'react-router-dom';
import reviews from './reviews'; // Import the reviews

const HomePage: React.FC = () => {
  // Sort reviews by timestamp in descending order and take the first 3
  const recentReviews = reviews
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 3);

  return (
    <div>
      <h1>Welcome to the Game Review Site</h1>
      <p>Check out our latest game reviews:</p>

      {/* Display the 3 most recent reviews */}
      <ul>
        {recentReviews.map(review => (
          <li key={review.id}>
            <Link to={`/review/${review.id}`}>
              {review.title} ({review.platform}) - {review.unrated ? "Unrated" : renderStars(review.graphics ?? review.gameplay ?? review.story ?? 0)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Link to the game reviews page */}
      <Link to="/reviews">See all Game Reviews</Link>
    </div>
  );
};

const renderStars = (rating: number) => {
  if (rating === undefined || rating === null) {
    return <span className="unrated-label">Unrated</span>; // Display "Unrated"
  }

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<span key={i} className={i < rating ? '★' : '☆'}></span>);
  }
  return stars;
};

export default HomePage;
