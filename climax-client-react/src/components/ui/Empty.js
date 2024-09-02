import React from "react";

const Empty = () => {
  return (
    <div className="alert alert-light" role="alert">
      <div className="iq-alert-icon">
        <i className="ri-alert-line" />
      </div>
      <div className="iq-alert-text">
        Aucune <b>donnée</b> n'est disponible pour le moment!
      </div>
    </div>
  );
};
export default Empty;
