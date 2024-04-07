/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = ({ userData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Completed on Date",
      },
    },
    scales: {
      y: {
        suggestedMin: 1,
        suggestedMax: 2,
        ticks: {
          stepSize: 1, // Set the step size to 1 to show only integer values
          callback: function (value, index, values) {
            // Display the value if it's 1 or 2
            return value === 1 || value === 2 ? value : "";
          },
        },
      },
    },
  };

  // Assuming labels represent dates of the month
  const labels = Array.from({ length: 30 }, (_, i) => i + 1);

  // Function to generate data array based on userData
  const generateData = () => {
    return labels.map((label, index) => {
      const dateString = `2024-04-${label < 10 ? "0" + label : label}`;
      return userData.includes(dateString) ? 1 : 0;
    });
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Days",
        data: generateData(),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
