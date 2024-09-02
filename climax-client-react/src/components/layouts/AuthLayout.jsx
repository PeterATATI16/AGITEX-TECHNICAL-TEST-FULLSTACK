import React from "react";
import "./AuthLayout.css";
function AuthLayout({ children }) {
  return (
    <div>
      <section className="sign-in-page">
        <div id="container-inside">
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
        </div>
        <div className="container p-0">
          <div className="row no-gutters height-self-center">
            <div className="col-sm-12 align-self-center bg-primary rounded">
              <div className="row m-0">
                <div className="col-md-7 text-center sign-in-page-image">
                  <div className="sign-in-detail text-white">
                    <a className="sign-in-logo mb-5" href="#">
                      <img
                        src="assets/images/logo-full.png"
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                    <div
                      className="owl-carousel"
                      data-autoplay="true"
                      data-loop="true"
                      data-nav="false"
                      data-dots="true"
                      data-items={1}
                      data-items-laptop={1}
                      data-items-tab={1}
                      data-items-mobile={1}
                      data-items-mobile-sm={1}
                      data-margin={0}
                    >
                      <div className="item">
                        <img
                          src="assets/images/login/1.png"
                          className="img-fluid mb-4"
                          alt="logo"
                        />
                        <h4 className="mb-1 text-white">Find new friends</h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content.
                        </p>
                      </div>
                      <div className="item">
                        <img
                          src="assets/images/login/1.png"
                          className="img-fluid mb-4"
                          alt="logo"
                        />
                        <h4 className="mb-1 text-white">
                          Connect with the world
                        </h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content.
                        </p>
                      </div>
                      <div className="item">
                        <img
                          src="assets/images/login/1.png"
                          className="img-fluid mb-4"
                          alt="logo"
                        />
                        <h4 className="mb-1 text-white">Create new events</h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 bg-white sign-in-page-data">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthLayout;
