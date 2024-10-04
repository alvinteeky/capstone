import React from "react";
import images from "../../constants/images";

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking-container">
      <img
        src={images.bookingConfirmed}
        alt="Booking confirmed" // Improved alt text for accessibility
        className="confirmed-booking-image"
      />
      <h1 className="confirmed-booking-title">Booking Confirmed</h1>
      <p className="confirmed-booking-message">
        Thank you for your reservation! We look forward to serving you.
      </p>
      <button
        className="confirmed-booking-button"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmedBooking;
