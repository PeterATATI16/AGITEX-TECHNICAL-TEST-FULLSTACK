import React from "react";
import Search from "./partials/topbar/Search";
import Lang from "./partials/topbar/Lang";
import Message from "./partials/topbar/Message";
import Profil from "./partials/topbar/Profil";
import Notification from "./partials/topbar/Notification";

function Topbar() {
  return (
    <div>
      <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="iq-menu-bt d-flex align-items-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="ri-menu-line" />
                </div>
                <div className="hover-circle">
                  <i className="ri-close-fill" />
                </div>
              </div>
              <div className="iq-navbar-logo d-flex justify-content-between ml-3">
                <a href="index.html" className="header-logo">
                  <img
                    src="images/logo.png"
                    className="img-fluid rounded"
                    alt=""
                  />
                  <span>FinDash</span>
                </a>
              </div>
            </div>
            <Search />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-3-line" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto navbar-list">
                <Lang />
                <Message />
                <Notification />
              </ul>
            </div>
            <Profil />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
