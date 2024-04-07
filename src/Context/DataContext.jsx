/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create the context
const HabitContext = createContext();

// Create a custom hook to use the context
export const useHabitContext = () => useContext(HabitContext);

// Create a provider component
export const HabitProvider = ({ children }) => {
  // Initialize habit data state
  const [habitData, setHabitData] = useState([
    {
      id: 1,
      title: "Reading Book",
      time: "7:30-10:30",
      img: "/images/watch.png",
      completed: false,
    },
    {
      id: 2,
      title: "Reading Book",
      time: "7:30-10:30",
      img: "/images/watch.png",
      completed: true,
    },
    {
      id: 3,
      title: "Reading Book",
      time: "7:30-10:30",
      img: "/images/watch.png",
      completed: false,
    },
    // Add other habits here
  ]);

  const markAsComplete = (habitId) => {
    setHabitData((prevData) =>
      prevData.map((habit) =>
        habit.id === habitId ? { ...habit, completed: true } : habit
      )
    );
  };
  // Function to update habit data
  const updateHabitData = (newData) => {
    setHabitData(newData);
  };

  return (
    <HabitContext.Provider
      value={{ habitData, updateHabitData, markAsComplete }}
    >
      {children}
    </HabitContext.Provider>
  );
};
