import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../utilities/API";
import BookingForm from "./BookingForm";

// Function to fetch and update time slots based on the selected date
const fetchAvailableTimeSlots = async (date) => {
  const response = await fetchAPI(new Date(date));
  return response;
};

// Initial time slots reducer
const initTimeSlots = (initAvailableTimeSlots) => ({
  morning: [...initAvailableTimeSlots.morning],
  afternoon: [...initAvailableTimeSlots.afternoon],
  evening: [...initAvailableTimeSlots.evening],
});

const Reservations = () => {
  const [availableTimeSlots, dispatchTimeslotsOnDateChange] = useReducer(
    initTimeSlots,
    { morning: [], afternoon: [], evening: [] }
  );
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  // Effect to fetch available time slots when the date changes
  useEffect(() => {
    const updateTimeSlots = async (date) => {
      setLoading(true);
      try {
        const response = await fetchAvailableTimeSlots(date);
        if (response) {
          dispatchTimeslotsOnDateChange(response);
        }
      } catch (err) {
        setError("Failed to fetch available time slots.");
      } finally {
        setLoading(false);
      }
    };
    // Assume you have a way to get the selected date from state or props
    const selectedDate = new Date().toISOString().split("T")[0]; // Example: today's date
    updateTimeSlots(selectedDate);
  }, [dispatchTimeslotsOnDateChange]);

  // Handler function to submit the reservation data to the server
  const submitReservation = async (reservation) => {
    setLoading(true);
    try {
      const response = await submitAPI(reservation);
      if (response) {
        navigate("/ConfirmedBooking"); // Navigate to confirmation page on success
      } else {
        setError("Data submission failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while submitting the reservation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <p>Loading...</p>} {/* Loading message */}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Error message */}
      <BookingForm
        submitReservation={submitReservation}
        availableTimeSlots={availableTimeSlots}
        dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChange}
      />
    </>
  );
};

export default Reservations;
