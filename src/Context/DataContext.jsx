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
    },
    // Add other habits here
  ]);

  // Function to update habit data
  const updateHabitData = (newData) => {
    setHabitData(newData);
  };

  return (
    <HabitContext.Provider value={{ habitData, updateHabitData }}>
      {children}
    </HabitContext.Provider>
  );
};
