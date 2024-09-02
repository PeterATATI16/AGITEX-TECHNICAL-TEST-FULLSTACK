import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { pluralize } from "../../../utils/Util";

function DashCard(props) {
  const { title, value, icon, color, isLoading, onclick } = props;
  return (
    <div className="col-sm-6 col-md-6 col-lg-3" onClick={onclick}>
      <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
        <div className="iq-card-body iq-box-relative clickable">
          <div
            className={`iq-box-absolute icon iq-icon-box rounded-circle iq-bg-${
              color ? color : "primary"
            }`}
          >
            {isLoading ? (
              <Skeleton circle={true} height={50} width={50} />
            ) : (
              icon
            )}
          </div>
          <p className="text-secondary">
            {isLoading ? <Skeleton width={80} /> : pluralize(value, title)}
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <h4>
              <b>{isLoading ? <Skeleton width={30} /> : value}</b>
            </h4>
            <div id="iq-chart-box1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashCard;
