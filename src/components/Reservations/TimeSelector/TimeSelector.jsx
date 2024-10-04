import React from "react";
import "./TimeSelector.css";

const TimeCapsule = ({ morning, slots, chooseTime }) => {
  // Handle radio change and pass selected time to the parent component
  const handleRadioChange = (e) => {
    chooseTime(e.target.value);
  };

  return (
    <div>
      <h1>{morning}</h1>
      <div className="timeslots-capsules">
        {slots.map((item) => (
          <span className="radio-label-box" key={item}>
            <label htmlFor={item} className="radio-btn-label">
              <input
                type="radio"
                name="timeslots"
                id={item}
                value={item}
                onChange={handleRadioChange}
                aria-label={`Select ${item} time slot`}
              />
              {item}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};

const TimeSelector = ({ chooseTime, availableTimeSlots }) => {
  const hour = new Date().getHours(); // Get current hour in 24-hour format

  // Determine time of day based on current hour
  const getTimeOfDay = () => {
    if (hour >= 9 && hour < 12) return "morning";
    if (hour >= 12 && hour < 16) return "afternoon";
    if (hour >= 16 && hour < 21) return "evening";
    return null; // Outside of designated time slots
  };

  const timeOfDay = getTimeOfDay();

  return (
    <div className="reservation_time-selector">
      {timeOfDay && (
        <TimeCapsule
          chooseTime={chooseTime}
          morning={timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} // Capitalize first letter
          slots={availableTimeSlots[timeOfDay]}
        />
      )}
    </div>
  );
};

export default TimeSelector;
