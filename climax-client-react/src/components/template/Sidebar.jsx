import React from "react";
import SideNav from "./partials/SideNav";

function Sidebar() {
  return (
    <div>
      <div className="iq-sidebar">
        <div className="iq-navbar-logo d-flex justify-content-between">
          <a href="index.html" className="header-logo">
            <img
              src="assets/images/clx.jpg"
              className="img-fluid rounded"
              alt=""
            />
            <span>Climax</span>
          </a>
          <div className="iq-menu-bt align-self-center">
            <div className="wrapper-menu">
              <div className="main-circle">
                <i className="ri-menu-line" />
              </div>
              <div className="hover-circle">
                <i className="ri-close-fill" />
              </div>
            </div>
          </div>
        </div>
        <div id="sidebar-scrollbar">
          <SideNav />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
