import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch,} from "react-redux";
import { LogOut, reset } from "../features/authenSlice";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Staff, setUsers] = useState([]);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  const getSTAFF = async () => {
    try {
      let akun = await axios({
        method: "get",
        url: "http://localhost:3001/staff",
      });
      setUsers(akun.data);
    } catch (err) {
      alert(err);
    }
  };
  const accountHandler = () => {
    Swal.fire(
      {
        position: "top-end",
        title: `Nama: ${Staff.nama}<br>Email: ${Staff.email}<br>ID AKUN: ${Staff.id}`,
        showConfirmButton: false,
        timer: 1000,
      }
      // `Email: ${Staff.email}`,
      // `ID AKUN: ${Staff.id}`
    );
  };

  useEffect(() => {
    getSTAFF();
  }, []);

  return (
    <div>
      <div className="app-header header ">
        <div className="container-fluid main-container bg-primary-subtle ">
          <div className="d-flex align-items-center">
            <h4 className="text-center fw-bold">
              SISTEM INFORMASI MANAJEMEN INVENTARISASI BARANG UPT TEKNOLOGI
              INFORMASI DAN KOMUNIKASI UNIVERSITAS SRIWIJAYA
            </h4>
            <div className="d-flex order-lg-2 ms-auto header-right-icons ">
              <div className="navbar navbar-collapse responsive-navbar p-0 ">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent-2"
                >
                  <div className="d-flex order-lg-0">
                    <a
                      className="dropdown-item bg-tertiary bs-primary bg-info fw-bold "
                      onClick={(id) => accountHandler(id)}
                    >
                      <i className="dropdown-icon bi bi-person-fill fw-bold"></i>
                      {`${Staff.nama}`}
                    </a>
                  </div>
                  <div>
                    <a
                      onClick={logout}
                      className="dropdown-item bg-tertiary bg-primary fw-bold
                                  "
                    >
                      <i className="dropdown-icon fe fe-alert-circle fw-bold"></i>{" "}
                      Keluar
                    </a>
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
  );
}

export default Navbar;
