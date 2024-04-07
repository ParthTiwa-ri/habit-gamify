/* eslint-disable react/prop-types */
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

function CustomCalendar({ highlightedDates }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const highlightedDateObjects = highlightedDates.map((dateString) => {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  });

  const tileClassName = ({ date }) => {
    // Check if the date is in the highlightedDateObjects array
    const formattedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    return highlightedDateObjects.some((highlightedDate) =>
      isSameDate(formattedDate, highlightedDate)
    )
      ? "highlighted"
      : "";
  };

  // Function to compare if two dates have the same year, month, and day
  const isSameDate = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  return (
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      tileClassName={tileClassName}
    />
  );
}

export default CustomCalendar;
