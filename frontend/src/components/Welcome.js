import React from "react";

const welcome = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-11 col-md-12 col-sm-12 col-xl-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
              <div className="card overflow-hidden">
                <div className="card-body ">
                  <div className="row">
                    <div className="col">
                      <a href="/users">
                        <h6 className="">Total User</h6>
                      </a>
                      <h3 className="mb-2 number-font">3</h3>
                      <p className="text-muted mb-10 ">
                        <span className="text-primary ">
                          <i className="fa fa-chevron-circle-up text-primary me-1"></i>{" "}
                          3%
                        </span>{" "}
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto">
                        <i className="fe fe-trending-up text-white mb-5 "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h6 className="">Total Jenis Barang</h6>
                      <h3 className="mb-2 number-font">10</h3>
                      <p className="text-muted mb-0">
                        <span className="text-secondary">
                          <i className="fa fa-chevron-circle-up text-secondary me-1"></i>{" "}
                          3%
                        </span>{" "}
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-danger-gradient box-shadow-danger brround  ms-auto">
                        <i className="icon icon-rocket text-white mb-5 "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h6 className="">Total Data Barang</h6>
                      <h3 className="mb-2 number-font">2</h3>
                      <p className="text-muted mb-0">
                        <span className="text-success">
                          <i className="fa fa-chevron-circle-down text-success me-1"></i>{" "}
                          0.5%
                        </span>{" "}
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-secondary-gradient box-shadow-secondary brround ms-auto">
                        <i className="fe fe-dollar-sign text-white mb-5 "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h6 className="">Total Peminjaman</h6>
                      <h3 className="mb-2 number-font">9</h3>
                      <p className="text-muted mb-0">
                        <span className="text-danger">
                          <i className="fa fa-chevron-circle-down text-danger me-1"></i>{" "}
                          0.2%
                        </span>{" "}
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-success-gradient box-shadow-success brround  ms-auto">
                        <i className="fe fe-briefcase text-white mb-5 "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
        <div>
          <h1 class="page-title">Default Calender</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Default Calender
            </li>
          </ol>
        </div>
      </div>
  );
};

export default welcome;
