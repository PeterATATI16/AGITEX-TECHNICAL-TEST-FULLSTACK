import React from "react";

function Footer() {
  return (
    <div>
      <footer className="iq-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="terms-of-service.html">Terms of Use</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 text-right">
              Copyright 2020 <a href="#">FinDash</a> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
