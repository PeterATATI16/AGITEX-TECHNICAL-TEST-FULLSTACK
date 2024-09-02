import { useQuery } from "react-query";
import { errorToast } from "../config/toaster";
import { useState } from "react";
import { fetchDashboardItems } from "../services/dashboardService";

export const useDashboard = () => {
  const [dashUsers, setDashUsers] = useState(null);
  const [usersChart, setUsersChart] = useState([]);

  const [currentDay, setUsersCurrentDay] = useState(null);
  const [currentMonth, setUsersCurrentMonth] = useState(null);
  const [currentYear, setUsersCurrentYear] = useState(null);

  const dashboardDataQuery = useQuery("dashboard_items", fetchDashboardItems, {
    onSuccess: (data) => {
      setDashUsers(data.users);
      setUsersChart(data.usersChart);

      setUsersCurrentDay(data.currentDay);
      setUsersCurrentMonth(data.currentMonth);
      setUsersCurrentYear(data.currentYear);
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        "Erreur lors du chargement des éléments du tableau de bord";
      errorToast(message);
    },
  });

  const currentData = {
    day: currentDay,
    month: currentMonth,
    year: currentYear,
  };

  return {
    dashUsers,
    usersChart,
    isLoadingDashData: dashboardDataQuery.isLoading,

    currentData,
  };
};
