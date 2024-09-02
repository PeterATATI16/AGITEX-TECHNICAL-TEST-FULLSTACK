import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ClientsStatsChart = ({ clientsStats }) => {
  const data = {
    labels: clientsStats.map((item) => item.profession),
    datasets: [
      {
        label: "Nombre de Clients",
        data: clientsStats.map((item) => item.totalClients),
        backgroundColor: "rgba(0, 33, 89, 0.5)",
        borderColor: "rgba(0, 33, 89, 1)",
        borderWidth: 0,
      },
      {
        label: "Salaire Moyen",
        data: clientsStats.map((item) => item.averageSalary),
        backgroundColor: "rgba(7, 22, 87, 0.9)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 0,
      },
      {
        label: "Salaire Total",
        data: clientsStats.map((item) => item.totalSalary),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
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
        text: "Statistiques des Professions",
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: true,
        },
        beginAtZero: true,
      },
    },
    animation: {
      duration: 2500,
      easing: 'easeOutBounce',
    },
  };

  return <Bar data={data} options={options} height={200} />;
};

export default ClientsStatsChart;
