import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authenSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      <div className="app-header ">
        <div className="container-fluid main-container ">
          <div className="d-flex align-items-center">
            <a
              aria-label="Hide Sidebar "
              className="app-sidebar__toggle "
              data-bs-toggle="sidebar "
              href="javascript:void(0);"
            ></a>

            <div className="d-flex order-lg-2 ms-auto header-right-icons">
              <button
                className="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon fe fe-more-vertical text-dark"></span>
              </button>
              <div className="navbar navbar-collapse responsive-navbar p-0">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent-4"
                >
                  <div className="d-flex order-lg-2">
                    <div className="dropdown d-block d-lg-none">
                      <a
                        href="javascript:void(0);"
                        className="nav-link icon"
                        data-bs-toggle="dropdown"
                      >
                        <i className="fe fe-search"></i>
                      </a>
                      <div className="dropdown-menu header-search dropdown-menu-start">
                        <div className="input-group w-100 p-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search...."
                          />
                          <div className="input-group-text btn btn-primary">
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown d-md-flex profile-1">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        className="nav-link leading-none d-flex px-1"
                      />
                      <span>
                        <img
                          src="../assets/images/users/8.jpg"
                          alt="profile-user"
                          className="avatar  profile-user brround cover-image"
                        />
                      </span>

                      <div className="app-header header sticky">
                        <div className="container-fluid main-container">
                          <div className="d-flex align-items-center">
                            <a
                              aria-label="Hide Sidebar"
                              className="app-sidebar__toggle"
                              data-bs-toggle="sidebar"
                              href="javascript:void(0);"
                            ></a>
                            <div className="responsive-logo">
                              <a href="index.html" className="header-logo">
                                <img
                                  src="../assets/images/brand/logo-3.png"
                                  className="mobile-logo logo-1"
                                  alt="logo"
                                />
                                <img
                                  src="../assets/images/brand/logo.png"
                                  className="mobile-logo dark-logo-1"
                                  alt="logo"
                                />
                              </a>
                            </div>

                            <a className="logo-horizontal " href="index.html">
                              <img
                                src="../assets/images/brand/logo.png"
                                className="header-brand-img desktop-logo"
                                alt="logo"
                              />
                              <img
                                src="../assets/images/brand/logo-3.png"
                                className="header-brand-img light-logo1"
                                alt="logo"
                              />
                            </a>

                            <div className="main-header-center ms-3 d-none d-lg-block">
                              <input
                                className="form-control"
                                placeholder="Search for anything..."
                                type="search"
                              />{" "}
                              <button className="btn">
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                            <div className="d-flex order-lg-2 ms-auto header-right-icons">
                              <button
                                className="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent-4"
                                aria-controls="navbarSupportedContent-4"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                              >
                                <span className="navbar-toggler-icon fe fe-more-vertical text-dark"></span>
                              </button>
                              <div className="navbar navbar-collapse responsive-navbar p-0">
                                <div
                                  className="collapse navbar-collapse"
                                  id="navbarSupportedContent-4"
                                >
                                  <div className="d-flex order-lg-2">
                                    <div className="dropdown d-block d-lg-none">
                                      <a
                                        href="/dasboard;"
                                        className="nav-link icon"
                                        data-bs-toggle="dropdown"
                                      >
                                        <i className="fe fe-search"></i>
                                      </a>
                                      <div className="dropdown-menu header-search dropdown-menu-start">
                                        <div className="input-group w-100 p-2">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search...."
                                          />
                                          <div className="input-group-text btn btn-primary">
                                            <i
                                              className="fa fa-search"
                                              aria-hidden="true"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="dropdown-divider m-0"></div>
                                    <a
                                      className="dropdown-item bs-primary"
                                      href="profile.html"
                                    >
                                      <i className="dropdown-icon fe fe-user"></i>{" "}
                                      Profile
                                    </a>

                                    <a
                                      onClick={logout}
                                      className="dropdown-item bg-tertiary"
                                    >
                                      <i className="dropdown-icon fe fe-alert-circle "></i>{" "}
                                      Sign out
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown d-md-flex header-settings">
                      <a
                        href="javascript:void(0);"
                        className="nav-link icon "
                        data-bs-toggle="sidebar-right"
                        data-target=".sidebar-right"
                      >
                        <i className="fe fe-menu"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
