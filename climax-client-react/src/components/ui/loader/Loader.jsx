import React from "react";
import "./loading.css";
function Loader() {
  return (
    <div className="loading-container">
      <>
        <div
          className="spinner-border"
          style={{ width: "1rem", height: "1rem" }}
          role="status"
        ></div>
        <div
          className="spinner-grow"
          style={{ width: "1rem", height: "1rem" }}
          role="status"
        ></div>
      </>
    </div>
  );
}

export default Loader;
