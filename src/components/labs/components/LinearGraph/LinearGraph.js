import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ text, nameX, nameY, X, Y }) {
  const data = {
    labels: X,
    datasets: [
      {
        label: text.title,
        data: Y,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.4)",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 25,
          },
        },
      },
    },
    title: {
      font: {
        size: 20,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: text.nameX,
          font: {
            size: 20,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: text.nameY,
          font: {
            size: 20,
          },
        },
      },
    },
  };
  return <Line data={data} options={options} />;
}
