import React from "react";
import { useAuth } from "../../../../hooks/auth";
import Button from "../../../ui/buttons/Button";
import ICON from "../../../ui/ICONS/ICON";

function Profil() {
  const { isAuthenticated, AUTH, logout, isLoggingOut } = useAuth();
  return (
    <div>
      <ul className="navbar-list">
        {isAuthenticated && (
          <li className="line-height">
            <a
              href="#"
              className="search-toggle iq-waves-effect d-flex align-items-center"
            >
              <img
                src="assets/images/user/1.jpg"
                className="img-fluid rounded mr-3"
                alt="user"
              />
              <div className="caption">
                <h6 className="mb-0 line-height">{AUTH?.lastName}</h6>
                <p className="mb-0">{AUTH?.role}</p>
              </div>
            </a>
            <div className="iq-sub-dropdown iq-user-dropdown">
              <div className="iq-card shadow-none m-0">
                <div className="iq-card-body p-0 ">
                  <div className="bg-primary p-3">
                    <h5 className="mb-0 text-white line-height">
                      Hello {AUTH?.lastName}
                    </h5>
                    <span className="text-white font-size-12">Available</span>
                  </div>
                  <a
                    href="profile.html"
                    className="iq-sub-card iq-bg-primary-hover"
                  >
                    <div className="media align-items-center">
                      <div className="rounded iq-card-icon iq-bg-primary">
                        <i className="ri-file-user-line" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">My Profile</h6>
                        <p className="mb-0 font-size-12">
                          View personal profile details.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="profile-edit.html"
                    className="iq-sub-card iq-bg-primary-hover"
                  >
                    <div className="media align-items-center">
                      <div className="rounded iq-card-icon iq-bg-primary">
                        <i className="ri-profile-line" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">Edit Profile</h6>
                        <p className="mb-0 font-size-12">
                          Modify your personal details.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="account-setting.html"
                    className="iq-sub-card iq-bg-primary-hover"
                  >
                    <div className="media align-items-center">
                      <div className="rounded iq-card-icon iq-bg-primary">
                        <i className="ri-account-box-line" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">Account settings</h6>
                        <p className="mb-0 font-size-12">
                          Manage your account parameters.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="privacy-setting.html"
                    className="iq-sub-card iq-bg-primary-hover"
                  >
                    <div className="media align-items-center">
                      <div className="rounded iq-card-icon iq-bg-primary">
                        <i className="ri-lock-line" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">Privacy Settings</h6>
                        <p className="mb-0 font-size-12">
                          Control your privacy parameters.
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="d-inline-block w-100 text-center p-3">
                    <Button
                      clss={"bg-primary iq-sign-btn"}
                      title={"Sign Out"}
                      loader={isLoggingOut}
                      action={logout}
                      icon={ICON.logout_ico}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Profil;
