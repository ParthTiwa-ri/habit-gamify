import Header from "../Components/Header";
import { useHabitContext } from "../Context/DataContext";
import MyChart from "../ui/BarChart";

// import Calendar from "../ui/Calender";
import PieChart from "../ui/PieChart";

function Dashboard() {
  const { userData } = useHabitContext();
  console.log(userData);
  const length = userData.length;
  return (
    <>
      <Header />
      <div className="m-10">
        <header>
          <h2 className="text-5xl">
            Welcome <p className=" inline text-green-500">Parth Tiwari</p>
          </h2>
        </header>
        <section className="my-10">
          <p>
            Congratulations, you have {length}
            <img className=" h-7 inline mx-2" src="/images/coin.svg" />
            points
          </p>
        </section>
        <div className=" mt-16 w-full flex gap-28  justify-around ">
          <div className=" h-96 flex">
            <PieChart completedTasks={userData} />
          </div>
          <div className=" h-96 flex ">
            {/* <CustomCalendar highlightedDates={userData} />
             */}
            <MyChart userData={userData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
