import React, { useState, useEffect } from "react";
import axios from "axios";

const Welcome = () => {
  const [user, setUser] = useState("");
  const [pinjam, setPinjam] = useState("");
  const [jenis, setJenis] = useState("");
  const [barang, setBarang] = useState("");

  useEffect(() => {
    JumlahUser();
    JumlahPinjam();
    JumlahJenis();
    JumlahBarang();
  }, []);

  const JumlahUser = async () => {
    try {
      let user = await axios({
        method: "get",
        url: "http://localhost:3001/countUser",
      });

      setUser(user.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const JumlahPinjam = async () => {
    try {
      let pinjam = await axios({
        method: "get",
        url: "http://localhost:3001/jumlahpinjam",
      });

      setPinjam(pinjam.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const JumlahJenis = async () => {
    try {
      let jenis = await axios({
        method: "get",
        url: "http://localhost:3001/jumlahjenis",
      });

      setJenis(jenis.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const JumlahBarang = async () => {
    try {
      let barang = await axios({
        method: "get",
        url: "http://localhost:3001/jumlahbarang",
      });

      setBarang(barang.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-11 col-md-12 col-sm-12 col-xl-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h6 className="fw-bold">TOTAL USER</h6>
                      <h3 className="mb-2 number-font">{user} Orang</h3>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-dark-gradient box-shadow-primary brround ms-auto">
                        <i className="bi bi-people-fill text-white mb-5 "></i>
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
                      <h6 className="fw-bold">TOTAL JENIS BARANG</h6>
                      <h3 className="mb-2 number-font">{jenis} Jenis</h3>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-danger-gradient box-shadow-danger brround  ms-auto">
                        <i className="bi bi-layers-fill text-white mb-5 "></i>
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
                      <h6 className="fw-bold">TOTAL DATA BARANG</h6>
                      <h3 className="mb-2 number-font">{barang} Unit</h3>
                      <p className="text-muted mb-0">
                        <span className="text-success"></span>{" "}
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-secondary-gradient box-shadow-secondary brround ms-auto">
                        <i className="bi bi-box text-white mb-5 "></i>
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
                      <h6 className="fw-bold">TOTAL TRANSAKSI PEMINJAMAN</h6>
                      <h3 className="mb-2 number-font">{pinjam} Unit</h3>
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
      {/* <div>
        <h1 className="page-title">Default Calender</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Default Calender
          </li>
        </ol>
      </div> */}
    </div>
  );
};

export default Welcome;
