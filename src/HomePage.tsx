import React from 'react';
import { Link } from 'react-router-dom';
import { calculateAverageRating, formatReviewDate } from './utils/reviews';
import Stars from './components/reviews/stars';
import reviews from './data/reviews';
import NavBar from './components/navbar/navbar';

const HomePage: React.FC = () => {
  // Sort reviews by timestamp in descending order and take the first 3
  const recentReviews = reviews
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 3);

  return (
    <div className="page-container">
      <NavBar />
      <h1>Welcome to the Game Review Site</h1>
      <p>Check out our latest game reviews:</p>

      {/* Display the 3 most recent reviews */}
      <ul className="recent-reviews">
        {recentReviews.map(review => (
          <li key={review.id} className="review-card">
            <Link to={`/review/${review.id}`}>
              <h2>{review.title} ({review.platform})</h2>
            </Link>
            <div className="review-details">
              <p><Stars rating={calculateAverageRating(review)} /></p>
              {/* Display the formatted date */}
              <p className="review-date">{formatReviewDate(review.timestamp)}</p>
            </div>
            {/* Display the comments if they exist */}
            {review.comments && <p className="review-comments">Comments: {review.comments}</p>}
          </li>
        ))}
      </ul>

      {/* Link to the game reviews page */}
      <Link to="/reviews" className="view-all-link">See all Game Reviews</Link>
    </div>
  );
};

export default HomePage;
