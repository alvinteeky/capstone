import React from "react";
import { pulse } from "react-animations";
import { AiFillStar } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import { images } from "../../../constants";
import { AppWrap } from "../../../wrapper";
import "./Testimonials.css";

const Pulse = styled.div`
  animation: 5s ${keyframes`${pulse}`} infinite;
`;

const reviews = [
  {
    image: images.iqsf,
    name: "IQSF",
    reviewText: "Review text lorem ipsum dolor sit amet.",
  },
  {
    image: images.sajal,
    name: "Sajal",
    reviewText: "Review text lorem ipsum dolor sit amet.",
  },
  {
    image: images.ramsha,
    name: "Ramsha",
    reviewText: "Review text lorem ipsum dolor sit amet.",
  },
  {
    image: images.mawra,
    name: "Mawra",
    reviewText: "Review text lorem ipsum dolor sit amet.",
  },
];

const ReviewCard = ({ image, name, reviewText }) => {
  return (
    <div className="testimonials-review">
      <div className="testimonials-stars">
        {[...Array(5)].map((_, index) => (
          <AiFillStar
            key={index}
            className="testimonials-review-stars-icon"
            style={{ color: index < 5 ? "#FFD700" : "#ccc" }} // Change color based on rating
          />
        ))}
      </div>
      <div className="testimonials-name-image">
        <img className="testimonial-review-image" src={image} alt={name} />
        <h6 className="testimonials-review-name">{name}</h6>
      </div>
      <p className="testimonials-review-text">{reviewText}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials-content">
      <h1 className="testimonials-title">Testimonials</h1>
      <div className="testimonial-review-card">
        {reviews.map((review, index) => (
          <Pulse key={index}>
            <ReviewCard
              image={review.image}
              name={review.name}
              reviewText={review.reviewText}
            />
          </Pulse>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Testimonials, "testimonials-section", "testimonials");
