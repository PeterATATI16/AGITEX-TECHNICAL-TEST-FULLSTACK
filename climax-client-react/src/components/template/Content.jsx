import React from "react";

function Content({ children }) {
  return (
    <div>
      <div id="content-page" className="content-page">
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
}

export default Content;
