import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="sticky  ">
      <div className="app-sidebar__overlay  " data-bs-toggle="sidebar "></div>
      <aside className="app-sidebar bg-secondary-transparent ">
        <div className="side-header bg-secondary-gradient">
          <a className="header-brand1" href="/dasboard">
            <img
              src="https://tik.unsri.ac.id/img/logo.png"
              className="header-brand-img light-logo1"
              alt="logo"
            />
          </a>
        </div>
        <div className="main-sidemenu">
          <div className="slide-left disabled" id="slide-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
          </div>
          <ul className="side-menu">
            <li className="sub-category">
              <h3>Main</h3>
            </li>
            <li className="slide">
              <a
                className="side-menu__item bg-dark-subtle"
                data-bs-toggle="slide"
                href="/dasboard"
              >
                <i className="side-menu__icon fe fe-home"></i>
                <span className="side-menu__label fw-bold ">Dashboard</span>
                <i className="angle fa fa-angle-right"></i>
              </a>
            </li>
            {user && user.role === "admin" && (
              <div>
                <li className="sub-category">
                  <h3>MANAJEMEN USER</h3>
                </li>
                <li>
                  <a className="side-menu__item" href="/users">
                    <i className="side-menu__icon fe fe-users"></i>
                    <span className="side-menu__label fw-bold">DATA USER</span>
                    <i className="angle fa fa-angle-right"></i>
                  </a>
                </li>
                <li className="sub-category">
                  <h3>MANAJEMEN BARANG</h3>
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-bs-toggle="slide"
                    href="/jenis"
                  >
                    <i className="side-menu__icon fe fe-list"></i>
                    <span className="side-menu__label fw-bold">
                      JENIS BARANG
                    </span>
                    <i className="angle fa fa-angle-right"></i>
                  </a>
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-bs-toggle="slide"
                    href="/data"
                  >
                    <i className="side-menu__icon fe fe-database"></i>
                    <span className="side-menu__label fw-bold">
                      DATA BARANG
                    </span>
                    <i className="angle fa fa-angle-right"></i>
                  </a>
                </li>
              </div>
            )}

            <li className="sub-category">
              <h3>AKTIVITAS</h3>
            </li>
            <li className="slide">
              <a
                className="side-menu__item"
                data-bs-toggle="slide"
                href="/peminjaman"
              >
                <i className="side-menu__icon fe fe-bookmark"></i>
                <span className="side-menu__label fw-bold">PEMINJAMAN</span>
                <i className="angle fa fa-angle-right fw-bold"></i>
              </a>
            </li>
            {user && user.role === "admin" && (
              <div>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-bs-toggle="slide"
                    href="/Laporan"
                  >
                    <i className="side-menu__icon fe fe-file-text"></i>
                    <span className="side-menu__label fw-bold">LAPORAN</span>
                    <i className="angle fa fa-angle-right"></i>
                  </a>
                </li>
              </div>
            )}
          </ul>

          <div className="slide-right" id="slide-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
            </svg>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
