import React from "react";

function Message() {
  return (
    <div>
      <li className="nav-item nav-icon dropdown">
        <a
          href="#"
          className="search-toggle iq-waves-effect bg-primary rounded"
        >
          <i className="ri-mail-line" />
          <span className="bg-danger count-mail" />
        </a>
        <div className="iq-sub-dropdown">
          <div className="iq-card shadow-none m-0">
            <div className="iq-card-body p-0 ">
              <div className="bg-primary p-3">
                <h5 className="mb-0 text-white">
                  All Messages
                  <small className="badge  badge-light float-right pt-1">
                    5
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
                    <h6 className="mb-0 ">Barry Emma Watson</h6>
                    <small className="float-left font-size-12">13 Jun</small>
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

export default Message;
