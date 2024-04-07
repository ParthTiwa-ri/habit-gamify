/* eslint-disable react/prop-types */
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = ({ completedTasks }) => {
  // Calculate the count of completed tasks
  const completedCount = completedTasks.length;
  // Assuming total tasks count is 30 (you can change it accordingly)
  const totalCount = 30;
  // Calculate the count of incomplete tasks
  const incompleteCount = totalCount - completedCount;

  // Data for the pie chart
  const data = {
    labels: ["Completed", "Not Completed"],
    datasets: [
      {
        data: [completedCount, incompleteCount],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  // Add the label for completed tasks out of the total tasks
  const label = `${completedCount}/${totalCount}`;

  return (
    <div>
      <Pie data={data} />
      <div className="text-center mt-5">{label} Days</div>
    </div>
  );
};

export default PieChart;
