import React from "react";
import { Line } from "react-chartjs-2";
// import { CategoryScale, Chart, LinearScale } from "chart.js";
// Chart.register(CategoryScale, LinearScale);

import { Chart as ChartJS, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title);

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [4, 10, 5, 2, 20, 15, 45, 18, 32, 24, 11, 42 ],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} width={100} height={50}/>
    </div>
  );
};

export default LineChart;