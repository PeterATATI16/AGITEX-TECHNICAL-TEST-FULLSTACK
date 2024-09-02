import React from "react";

function Notification() {
  return (
    <div>
      <li className="nav-item nav-icon">
        <a
          href="#"
          className="search-toggle iq-waves-effect bg-primary rounded"
        >
          <i className="ri-notification-line" />
          <span className="bg-danger dots" />
        </a>
        <div className="iq-sub-dropdown">
          <div className="iq-card shadow-none m-0">
            <div className="iq-card-body p-0 ">
              <div className="bg-primary p-3">
                <h5 className="mb-0 text-white">
                  All Notifications
                  <small className="badge  badge-light float-right pt-1">
                    4
                  </small>
                </h5>
              </div>
              <a href="#" className="iq-sub-card">
                <div className="media align-items-center">
                  <div className="">
                    <img
                      className="avatar-40 rounded"
                      src="assets/images/user/01.jpg"
                      alt=""
                    />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0 ">Emma Watson Barry</h6>
                    <small className="float-right font-size-12">Just Now</small>
                    <p className="mb-0">95 MB</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Notification;
