import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormAddJenis = () => {
  const [nama, setNama] = useState("");
  const [no_bmn, setNoBmn] = useState("");
  const navigate = useNavigate();

  const saveJenis = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/tambahjenis", {
        nama: nama,
        no_bmn: no_bmn,
      });
      navigate("/jenis");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Jenis Barang Sudah Tersedia!",
      });
    }
  };

  return (
    <div>
      <h1 className="page-title  fw-bold">Halaman Tambah Jenis Barang</h1>
      <p></p>
      <h2 className="page-title fw-bold breadcrumb-item active fw-bold">
        Silahkan tambahkan Jenis Barang
      </h2>
      <div className="card is-shadowless">
        <div className="card-content  ">
          <div className="content">
            <form onSubmit={saveJenis}>
              <p className="has-text-centered">{""}</p>
              <div className="field">
                <label className="label">NAMA JENIS BARANG</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Silahkan tambahkan jenis barang"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">NO BMN</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={no_bmn}
                    onChange={(e) => setNoBmn(e.target.value)}
                    placeholder="Silahkan tambahkan jenis barang"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm rounded-16 me-2  mt-1"
                  >
                    Simpan
                  </button>

                  <a
                    href="/jenis"
                    className="btn btn-danger btn-sm rounded-16 me-2  mt-1"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddJenis;
