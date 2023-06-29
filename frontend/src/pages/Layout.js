import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="page bg-info-transparent">
        <div className="page-main">
          <Navbar />
          <Sidebar />
          <div className="main-content app-content mt-0">
            <div className="side-app ">
              <div className="main-container container-fluid">
                <div className="mt-9">{children}</div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer bg-secondary-transparent">
          <div class="container">
            <div class="row align-items-center flex-row-reverse">
              <div class="col-md-12 col-sm-12 text-center">
                Copyright ©2023 <span id="year"></span>{" "}
                <a href="javascript:void(0);">Upt-Tik-Unsri</a>. Created by{" "}
                <a> Hendra Wijaya </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
