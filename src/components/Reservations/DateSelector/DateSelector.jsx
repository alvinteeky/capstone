import React, { useEffect, useRef, useState } from "react";
import "./DateSelector.css";

const occasions = [
  {
    label: "Birthday",
    value: "birthday",
  },
  {
    label: "Anniversary",
    value: "anniversary",
  },
];

const DateSelector = (props) => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: new Date(),
  });

  const dateRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime({ date: new Date() });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDateChange = () => {
    const selectedDate = new Date(dateRef.current.value);
    if (selectedDate >= new Date()) {
      props.chooseDate(dateRef.current.value);
    } else {
      alert("Please select a date that is today or in the future.");
      dateRef.current.value = ""; // Reset input if date is invalid
    }
  };

  // Get occasion value from select option
  const handleOccasionChange = (e) => {
    props.chooseOccasion(e.target.value);
  };

  const formattedDate = currentDateTime.date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDateTime.date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="reservation_date-selector">
      <div className="reservation_date-selector-date-time">
        <h1 className="title">Date</h1>
        <div className="date-time">
          <div className="date">{formattedDate}</div>
          <div className="time">{formattedTime}</div>
        </div>
      </div>
      <div className="open-closed">
        <h1 className="title status">Open</h1>
      </div>

      <div className="choose-date">
        <label htmlFor="date-selector" className="visually-hidden">
          Select Date:
        </label>
        <input
          ref={dateRef}
          onChange={handleDateChange}
          type="date"
          id="date-selector"
          className="date-selector"
        />

        <label htmlFor="occasion-selector">Select Occasion:</label>
        <select
          id="occasion-selector"
          className="occasion-selector"
          value={props.ocassion}
          onChange={handleOccasionChange}
        >
          {occasions.map((occasion) => (
            <option key={occasion.value} value={occasion.value}>
              {occasion.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateSelector;
