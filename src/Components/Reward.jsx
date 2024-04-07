/* eslint-disable react/prop-types */
import { useHabitContext } from "../Context/DataContext";
import Coin from "../ui/Reward/Coin";
import { getCurrentDate } from "../utils/helper";

function Reward({ setClaimed }) {
  const { userData, setUserData } = useHabitContext();
  const currentDate = getCurrentDate();
  function handleClaim() {
    if (!userData) {
      setUserData([currentDate]); // Initialize userData with currentDate if it's empty
    } else {
      if (!userData.includes(currentDate)) {
        setUserData(prevUserData => [...prevUserData, currentDate]); // Add currentDate to userData if it's not already present
      }
    }
    // setAllCompleted(false);
    setClaimed(true);
}

  return (
    <div className="absolute inset-0 bg-slate-200/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative p-5 h-3/6 bg-base-content text-green-500 shadow-2xl rounded-lg">
        <p className="text-center text-3xl">Hurray 🥳 🎉</p>
        <p className="text-xl text-violet-600 mt-3">
          You have completed all habits for today
        </p>

        <Coin />
        <button
          onClick={handleClaim}
          className="px-4 font-semibold py-2 bg-success rounded-lg shadow-sm text-success-content absolute bottom-7 left-1/2 transform -translate-x-1/2 active:translate-y-0 focus:outline-none"
        >
          Claim Points
        </button>
      </div>
    </div>
  );
}

export default Reward;
