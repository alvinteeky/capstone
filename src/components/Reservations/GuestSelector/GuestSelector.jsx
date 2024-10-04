import React, { useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import "./GuestSelector.css";

const warningStyle = {
  fontSize: "16px",
  color: "red",
};

const GuestSelector = ({ chooseGuest }) => {
  const [guestCount, setGuestCount] = useState(1);
  const [warning, setWarning] = useState("");

  const increment = () => {
    setGuestCount((prevCount) => {
      if (prevCount < 10) {
        const newCount = prevCount + 1;
        chooseGuest(newCount); // Pass number of guests to parent component
        return newCount;
      } else {
        setWarning("* Max 10 guests");
        return prevCount; // Keep the previous count
      }
    });
  };

  const decrement = () => {
    setGuestCount((prevCount) => {
      if (prevCount > 1) {
        const newCount = prevCount - 1;
        chooseGuest(newCount); // Pass number of guests to parent component
        return newCount;
      } else {
        setWarning("* Min 1 guest");
        return prevCount; // Keep the previous count
      }
    });
  };

  return (
    <div className="reservation-guest">
      <h1 className="guest-title">Guest</h1>
      <div className="reservation-guest-counter-box">
        <div className="reservation-guest-counter">
          <button
            className="guest-decrement"
            onClick={decrement}
            type="button"
            aria-label="Decrease guest count"
          >
            <CgMathMinus />
          </button>
          <pre>{guestCount}</pre>
          <button
            className="guest-increment"
            onClick={increment}
            type="button"
            aria-label="Increase guest count"
          >
            <CgMathPlus />
          </button>
        </div>
        {warning && <span style={warningStyle}>{warning}</span>}
      </div>
    </div>
  );
};

export default GuestSelector;
