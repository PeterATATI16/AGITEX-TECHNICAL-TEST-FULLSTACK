import React from "react";

function Lang() {
  return (
    <div>
      <li className="nav-item">
        <a className="search-toggle iq-waves-effect language-title" href="#">
          <span
            className="ripple rippleEffect"
            style={{
              width: 98,
              height: 98,
              top: "-15px",
              left: "56.2969px",
            }}
          />
          <img
            src="assets/images/small/flag-01.png"
            alt="img-flaf"
            className="img-fluid mr-1"
            style={{ height: 16, width: 16 }}
          />{" "}
          EN <i className="ri-arrow-down-s-line" />
        </a>
        <div className="iq-sub-dropdown">
          <a className="iq-sub-card" href="#">
            <img
              src="assets/images/small/flag-02.png"
              alt="img-flaf"
              className="img-fluid mr-2"
            />
            French
          </a>
        </div>
      </li>
    </div>
  );
}

export default Lang;
