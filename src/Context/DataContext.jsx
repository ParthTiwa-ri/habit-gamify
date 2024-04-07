import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const HabitContext = createContext();

// Create a custom hook to use the context
export const useHabitContext = () => useContext(HabitContext);

// Create a provider component
export const HabitProvider = ({ children }) => {
  // Initialize habit data state
  const [isClaimed, setClaimed] = useState(
    JSON.parse(localStorage.getItem("isClaimed")) || false
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [
      "2024-04-01",
      "2024-04-04",
      "2024-04-05",
      "2024-04-07",
    ]
  );

  const [habitData, setHabitData] = useState(
    JSON.parse(localStorage.getItem("habitData")) || [
      {
        id: 1,
        title: "Morning Jog",
        desc: "Start your day with a refreshing jog to boost your energy levels.",
        timing: "6:00-7:00",
        img: "/images/jog.jpeg",
        completed: false,
      },
      {
        id: 2,
        title: "Strength Training",
        desc: "Enhance your strength and endurance with a focused strength training session.",
        img: "/images/weight.jpeg",
        completed: false,
      },
      {
        id: 3,
        title: "Nutritious Breakfast",
        timing: "9:00-10:30",
        desc: "Fuel your body with a nutritious breakfast to support your training and recovery.",
        img: "/images/breakfast.jpeg",
        completed: false,
      },
    ]
  );

  // Save data to local storage whenever it changes

  // Reset habit completions when day changes
  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const lastDate = localStorage.getItem("lastDate");

    if (lastDate !== currentDate) {
      resetHabitCompletion();
      localStorage.setItem("lastDate", currentDate);
    }
  }, []);
  const logout = () => {
    // Clear all items from local storage
    localStorage.clear();

    // Reset states to initial values
    setClaimed(false);
    setUserData(["2024-04-01", "2024-04-04", "2024-04-05"]);
    setHabitData([
      {
        id: 1,
        title: "Morning Jog",
        desc: "Start your day with a refreshing jog to boost your energy levels.",
        timing: "6:00-7:00",
        img: "/images/jog.jpeg",
        completed: false,
      },
      {
        id: 2,
        title: "Strength Training",
        desc: "Enhance your strength and endurance with a focused strength training session.",
        img: "/images/weight.jpeg",
        completed: false,
      },
      {
        id: 3,
        title: "Nutritious Breakfast",
        timing: "9:00-10:30",
        desc: "Fuel your body with a nutritious breakfast to support your training and recovery.",
        img: "/images/breakfast.jpeg",
        completed: false,
      },
    ]);
  };
  // Inside your DataContext or wherever you manage habit data
  function resetHabitCompletion() {
    // Assuming habitData is a state variable holding your habit data
    const updatedHabitData = habitData.map((habit) => ({
      ...habit,
      completed: false,
      // You may want to add a field to record completion date for each habit
      // completedOn: null
    }));
    // Update habit data state
    setHabitData(updatedHabitData);

    // You may also want to remove any stored completed habits from localStorage
    // Loop through localStorage and remove any items related to habit completion
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("habit_")) {
        localStorage.removeItem(key);
      }
    }
  }

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
      value={{
        habitData,
        updateHabitData,
        markAsComplete,
        resetHabitCompletion,
        userData,
        setUserData,
        isClaimed,
        setClaimed,
        logout,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};
