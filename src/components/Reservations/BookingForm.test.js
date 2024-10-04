import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Mock data for testing
const availableTimeSlots = ["17:00", "17:30"];
const today = new Date().toISOString().split("T")[0];
const dispatchOnDateChange = jest.fn();
const submitReservation = jest.fn();

test("Should Successfully Submit Form with all data fields filled", () => {
  render(
    <BookingForm
      submitReservation={submitReservation}
      availableTimeSlots={availableTimeSlots}
      dispatchTimeslotsOnDateChange={dispatchOnDateChange}
    />
  );

  // Fill in the Guest Selector
  const guestInput = screen.getByLabelText(/guests/i); // Assume you have a label for the guest input
  fireEvent.change(guestInput, { target: { value: 2 } }); // Set guest count to 2

  // Fill in the Date Selector
  const dateInput = screen.getByLabelText(/date/i); // Assume you have a label for the date input
  fireEvent.change(dateInput, { target: { value: today } }); // Set date to today

  // Fill in the Time Selector
  const timeInput = screen.getByLabelText(/time/i); // Assume you have a label for the time input
  fireEvent.change(timeInput, { target: { value: availableTimeSlots[0] } }); // Set time to first available slot

  // Select occasion (if you have a select dropdown or input for this)
  const occasionSelect = screen.getByLabelText(/occasion/i); // Assume you have a label for the occasion selector
  fireEvent.change(occasionSelect, { target: { value: "birthday" } }); // Select 'birthday'

  // Submit the form
  const submitButton = screen.getByRole("button", { name: /submit/i }); // Change to match the button label
  fireEvent.click(submitButton);

  // Assert that submitReservation was called with the expected arguments
  expect(submitReservation).toHaveBeenCalledWith({
    date: today,
    guests: 2, // Check against the number of guests set
    occasion: "birthday",
    time: availableTimeSlots[0], // Check against the selected time slot
  });
});
