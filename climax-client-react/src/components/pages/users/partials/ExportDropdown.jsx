import React from "react";

function ExportDropdown() {
  return (
    <div className="iq-card-header-toolbar d-flex align-items-center">
      <div className="dropdown show">
        <span
          className="dropdown-toggle text-primary"
          id="dropdownMenuButton5"
          data-toggle="dropdown"
          aria-expanded="true"
        >
          <i className="ri-more-fill" />
        </span>
        <div
          className="dropdown-menu dropdown-menu-right "
          aria-labelledby="dropdownMenuButton5"
          x-placement="bottom-end"
          style={{
            position: "absolute",
            willChange: "transform",
            top: 0,
            left: 0,
            transform: "translate3d(-138px, 22px, 0px)",
          }}
        >
          {/* <button className="dropdown-item" href="#">
            <i className="ri-eye-fill mr-2" />
            Voir
          </button> */}
          <a className="dropdown-item" href="#">
            <i className="ri-delete-bin-6-fill mr-2" />
            Supprimer
          </a>
          <a className="dropdown-item" href="#">
            <i className="ri-pencil-fill mr-2" />
            Modifier
          </a>
          {/* <a className="dropdown-item" href="#">
            <i className="ri-printer-fill mr-2" />
            Imprimer
          </a> */}
          {/* <a className="dropdown-item" href="#">
            <i className="ri-file-download-fill mr-2" />
            Télecharger
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ExportDropdown;
