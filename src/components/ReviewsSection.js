import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgReviews from '../assets/img/RectangleGrey.png';
import profile from '../assets/img/profile.png';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      image: profile,
      stars: 5,
      name: 'John Doe',
      review: 'The Kitty Corner is the best cat grooming salon I have ever been to. They took great care of my cat and did an amazing job with the grooming.'
    },
    {
      id: 2,
      image: profile,
      stars: 4,
      name: 'Jane Smith',
      review: 'I recently visited the Kitty Corner cat hotel, and it was a wonderful experience. The staff was friendly, and my cat enjoyed the comfortable accommodations.'
    },
    {
      id: 3,
      image: profile,
      stars: 5,
      name: 'Sarah Johnson',
      review: 'The Kitty Corner shop has an incredible variety of products for cats. I found everything I needed for my furry friend, and the staff was very helpful.'
    },
    {
      id: 4,
      image: profile,
      stars: 5,
      name: 'Michael Brown',
      review: 'I adopted my cat from the Kitty Corner adoption center, and I couldnt be happier. They provide a loving and safe environment for cats in need.'
    },
    {
      id: 5,
      image: profile,
      stars: 4,
      name: 'Emily Wilson',
      review: 'The Kitty Corner cat hotel is amazing! My cat had a great time playing and exploring in their cat playground. Highly recommended.'
    },
    {
      id: 6,
      image: profile,
      stars: 5,
      name: 'David Thompson',
      review: 'I visited the Kitty Corner cafe, and it was a delightful experience. The atmosphere is cozy, and the coffee is excellent. A perfect place for cat lovers.'
    },
    {
      id: 7,
      image: profile,
      stars: 4,
      name: 'Jennifer Davis',
      review: 'I took my cat to the Kitty Corner salon for grooming, and they did a fantastic job. My cat came out looking beautiful and happy. Im amazed by their service!'
    },
    {
      id: 8,
      image: profile,
      stars: 5,
      name: 'Robert Garcia',
      review: 'I recently adopted a cat from the Kitty Corner adoption center, and it was a smooth and wonderful process. The staff was caring and knowledgeable.'
    },
    {
      id: 9,
      image: profile,
      stars: 4,
      name: 'Michelle Lee',
      review: 'The Kitty Corner cat hotel provides a safe and comfortable environment for cats. I had peace of mind knowing that my cat was well taken care of.'
    },
    {
      id: 10,
      image: profile,
      stars: 5,
      name: 'Daniel Wilson',
      review: 'I love the Kitty Corner cat shop! They have a wide range of products for cats, and the quality is excellent. Definitely my go-to place for cat supplies.'
    },
    {
      id: 11,
      image: profile,
      stars: 4,
      name: 'Lisa Miller',
      review: 'I recently visited the Kitty Corner cat adoption center, and it was a wonderful experience. The staff was friendly and helped me find the perfect cat companion.'
    },
    {
      id: 12,
      image: profile,
      stars: 3,
      name: 'Brian Wilson',
      review: 'I took my cat to the Kitty Corner grooming salon, and while the service was decent, I expected better results. It could be improved.'
    },
  ];

  const reviewsChunks = [];
  const numReviewsPerChunk = window.innerWidth < 576 ? 1 : 3; // Adjust the number of reviews per chunk based on the screen width

  for (let i = 0; i < reviews.length; i += numReviewsPerChunk) {
    reviewsChunks.push(reviews.slice(i, i + numReviewsPerChunk));
  }

  return (
    <div className="reviews-section" style={{ backgroundImage: `url(${bgReviews})` }}>
      <h2 className="text-center" style={{ marginBottom: '50px', color: 'rgba(252, 89, 1, 0.7)' }}>Customer Reviews</h2>
      <Carousel interval={null} className="card-slider">
        {reviewsChunks.map((reviewsChunk, index) => (
          <Carousel.Item key={index}>
            <Container>
              <Row>
                {reviewsChunk.map(review => (
                  <Col key={review.id} size={12} sm={6} md={4}>
                    <Card className="review-card text-white">
                      <div className="profile-img">
                        <img src={review.image} alt="Profile" />
                      </div>
                      <Card.Body>
                        <Card.Title>{review.name}</Card.Title>
                        <div className="stars">
                          {[...Array(review.stars)].map((_, index) => (
                            <FontAwesomeIcon key={index} icon={faStar} />
                          ))}
                        </div>
                        <Card.Text>{review.review}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewsSection;