/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Header from "../Components/Header";

// import { habitData } from "./data/habitData";
import Model from "../Components/Model";
import Reward from "../Components/Reward";
import { useHabitContext } from "../Context/DataContext";

export default function HomePage() {
  const { habitData, isClaimed, setClaimed } = useHabitContext();

  const [allCompleted, setAllCompleted] = useState(false);
  useEffect(() => {
    // Check if all habits are completed
    const areAllCompleted = habitData.every((habit) => habit.completed);

    // Update allCompleted state
    setAllCompleted(areAllCompleted);
  }, [habitData]);
  return (
    <main>
      <Header />
      {allCompleted && isClaimed === false ? (
        <Reward setAllCompleted={setAllCompleted} setClaimed={setClaimed} />
      ) : null}

      <section className="mainData mx-5">
        <div className="titleContainer flex justify-between mt-5 ">
          <h1 className="text-5xl ">Today Activities</h1>
          <Model />
        </div>
        <span className="ml-2 mt-2">Manage your habits</span>

        {/* Habits list */}

        <div className="habitContainer mt-14">
          <h2 className="text-3xl mb-6">Your Habits</h2>

          <ul className="flex gap-8 flex-wrap">
            {habitData.map((item) => (
              <ListCard key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

// function ListCard({ item }) {
//   return (
//     <li className=" card p-3 shadow-lg text-base-300 rounded-xl bg-base-content flex flex-col items-center gap-2 ">
//       <img className=" h-36  rounded-2xl" src={item.img} alt="" />
//       <p className="text-xl font-semibold">{item.title}</p>
//       <p className="text-base-100">{item.time}</p>
//     </li>
//   );
// }

function ListCard({ item }) {
  const { markAsComplete } = useHabitContext();
  function handleComplete() {
    markAsComplete(item.id);
  }

  return (
    <div className="card card-compact w-72  bg-base-content text-base-100 shadow-xl transition-transform hover:scale-105 duration-500">
      <figure>
        <img src={item.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.desc}</p>
        <p className="mt-3">{item.timing}</p>
        <div className="card-actions justify-end">
          {item.completed === false ? (
            <button onClick={handleComplete} className=" mt-2 btn btn-primary">
              Mark as Complete
            </button>
          ) : (
            <button className=" mt-2 btn btn-secondary">Completed</button>
          )}
        </div>
      </div>
    </div>
  );
}
