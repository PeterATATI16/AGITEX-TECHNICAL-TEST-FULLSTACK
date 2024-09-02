import React from "react";
import DashCardItems from "./partials/DashCardItems";
import ProgessBar from "../../ui/ProgessBar";
import { useUsers } from "../../../hooks/users";
import ClientsStatsChart from "./partials/ClientStatsChart";
import ClientsProfessionPieChart from "./partials/ClientsProfessionPieChart";

function Dashboard() {
  const { users, clients_stats, isLoadingClientStats, isLoadingUsers } =
    useUsers();
  console.log("Stats", clients_stats);

  if (isLoadingUsers || isLoadingClientStats) {
    return <ProgessBar loader={isLoadingUsers} progress={100} />;
  }
  return (
    <div>
      <div className="row">
        <DashCardItems
          users={users}
          isLoading={isLoadingUsers}
          clients_stats={clients_stats}
        />
      </div>
      <div className="row charts mb-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body shadow-sm">
              <ClientsStatsChart clientsStats={clients_stats} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body shadow-sm">
              <ClientsProfessionPieChart clientsStats={clients_stats} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
