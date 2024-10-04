import React from "react";
import ICON from "../../ui/ICONS/ICON";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <>
      <nav className="iq-sidebar-menu">
        <ul id="iq-sidebar-toggle" className="iq-menu">
          <li className="active">
            <ul>
              <li className="active">
                <Link to={"/dashboard"}>
                  {ICON.dash_ico}
                  Tableau de bord
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#userinfo"
              className="iq-waves-effect"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <span className="ripple rippleEffect" />
              {ICON.user_ico}
              <span>Clients</span>
              <i className="ri-arrow-right-s-line iq-arrow-right" />
            </a>
            <ul
              id="userinfo"
              className="iq-submenu collapse"
              data-parent="#iq-sidebar-toggle"
              style={{}}
            >
              <li>
                <Link to={"/clients"}>
                  {ICON.list_ico}
                  Liste clients
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="p-3" />
    </>
  );
}

export default SideNav;
