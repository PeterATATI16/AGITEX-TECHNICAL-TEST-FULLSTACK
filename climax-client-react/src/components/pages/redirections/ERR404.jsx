import React from "react";

function ERR404() {
  return (
    <div>
      <div className="container p-0">
        <div className="row no-gutters">
          <div className="col-sm-12 text-center">
            <div className="iq-error position-relative mt-5">
              <img
                src="assets/images/error/404.png"
                className="img-fluid iq-error-img"
                alt=""
              />
              <h2 className="mb-0 mt-4">Oops! This Page is Not Found.</h2>
              <p>The requested page dose not exist.</p>
              <a className="btn btn-primary mt-3" href="index.html">
                <i className="ri-home-4-line" />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERR404;
