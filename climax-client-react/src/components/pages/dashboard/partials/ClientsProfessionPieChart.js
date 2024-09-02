import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PieController,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, PieController, ArcElement);

const ClientsProfessionPieChart = ({ clientsStats }) => {
  const data = {
    labels: clientsStats.map((item) => item.profession),
    datasets: [
      {
        label: "Nombre de Clients par Profession",
        data: clientsStats.map((item) => item.totalClients),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(7, 22, 87, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(7, 22, 87, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Répartition des Clients par Profession",
      },
    },
    animation: {
      duration: 2500,
      easing: "easeOutBounce",
    },
  };

  return (
    <div style={{ width: "490px", height: "490px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ClientsProfessionPieChart;
