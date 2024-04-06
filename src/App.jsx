/* eslint-disable react/prop-types */
import Header from "./Components/Header";

// import { habitData } from "./data/habitData";
import Model from "./Components/Model";
import { useHabitContext } from "./Context/DataContext";

export default function App() {
  const { habitData } = useHabitContext();
  return (
    <main>
      <Header />

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
  return (
    <div className="card card-compact w-72  bg-base-content text-base-100 shadow-xl">
      <figure>
        <img src={item.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
