import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import DateSelector from "./DateSelector/DateSelector";
import GuestSelector from "./GuestSelector/GuestSelector";
import Reserve from "./Reserve/Reserve";
import TimeSelector from "./TimeSelector/TimeSelector";

function BookingForm({
  availableTimeSlots,
  submitReservation,
  dispatchTimeslotsOnDateChange,
}) {
  const [time, setTime] = useState("00:00");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("birthday");

  const [reservation, setReservation] = useState({
    guests: 1,
    date: "",
    time: "",
    occasion: "birthday",
  });

  useEffect(() => {
    setReservation({ guests, date, time, occasion });
  }, [guests, date, time, occasion]);

  const chooseTime = (time) => {
    setTime(time);
  };

  const chooseGuest = (guests) => {
    setGuests(guests);
  };

  const chooseDate = (date) => {
    setDate(date);
    dispatchTimeslotsOnDateChange(date);
  };

  const chooseOccasion = (occasion) => {
    setOccasion(occasion);
  };

  const validateReservation = () => {
    return (
      reservation.time &&
      reservation.date &&
      reservation.guests &&
      reservation.occasion
    );
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validateReservation()) {
      submitReservation(reservation);
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <GuestSelector chooseGuest={chooseGuest} />

        <DateSelector
          chooseDate={chooseDate}
          chooseOccasion={chooseOccasion}
          occasion={occasion}
        />

        <TimeSelector
          chooseTime={chooseTime}
          availableTimeSlots={availableTimeSlots}
        />

        <Reserve value={validateReservation() ? 0 : 1} />

        {validateReservation() ? null : (
          <p className="error-message">Please fill in all fields.</p>
        )}
      </form>
    </div>
  );
}

// Prop Types for better type-checking
BookingForm.propTypes = {
  availableTimeSlots: PropTypes.array.isRequired,
  submitReservation: PropTypes.func.isRequired,
  dispatchTimeslotsOnDateChange: PropTypes.func.isRequired,
};

export default BookingForm;
