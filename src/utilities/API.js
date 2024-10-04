const seededRandom = (seed) => {
  const m = 2 ** 35 - 31; // modulus
  const a = 185852; // multiplier
  let s = seed % m; // initial state
  return () => {
    s = (s * a) % m; // update state
    return s / m; // return a value between 0 and 1
  };
};

/**
 * Fetches available time slots based on the provided date.
 *
 * @param {Date} date - The date for which to fetch available times.
 * @returns {Object} An object containing arrays of available time slots for morning, afternoon, and evening.
 */
const fetchAPI = (date) => {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error(
      "Invalid date provided. Please provide a valid Date object."
    );
  }

  const result = { morning: [], afternoon: [], evening: [] };
  const random = seededRandom(date.getDate());

  const addTimeSlots = (timeArray, startHour, endHour) => {
    for (let i = startHour; i < endHour; i++) {
      if (random() < 0.5) {
        timeArray.push(`${i % 12 || 12}:00`);
      }
      if (random() < 0.5) {
        timeArray.push(`${i % 12 || 12}:30`);
      }
    }
  };

  // Fetch time slots for each part of the day
  addTimeSlots(result.morning, 9, 12); // Morning: 9 AM - 11:30 AM
  addTimeSlots(result.afternoon, 12, 16); // Afternoon: 12 PM - 3:30 PM
  addTimeSlots(result.evening, 16, 21); // Evening: 4 PM - 8:30 PM

  return result;
};

const submitAPI = (formData) => {
  // You can implement the actual submission logic here
  // Returning true for now to indicate successful submission
  return true;
};

export { fetchAPI, submitAPI };
