import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const FormEditJenis = () => {
  const [nama, setnama_jenis] = useState("");
  const [no_bmn, setNoBmn] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getJenisById = async () => {
      try {
        const Jenis = await axios.get(`http://localhost:3001/getjenis/${id}`);
        setnama_jenis(Jenis.data.nama);
        setNoBmn(Jenis.data.no_bmn);
      } catch (error) {
        if (error.response) {
          alert(error);
        }
      }
    };
    getJenisById();
  }, [id]);

  const updateJenis = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/editjenis/${id}`, {
        nama: nama,
        no_bmn: no_bmn,
      });
      Swal.fire(
        "Update Jenis Berhasil",
        "Jenis Barang Berhasil di Update.",
        "success"
      );
      navigate("/jenis");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Jenis Barang Sudah Tersedia!",
        text: "Silahkan ganti dengan jenis barang yang lain!",
      });
    }
  };

  return (
    <div>
      <h1 className="page-title  fw-bold">Halaman Edit Jenis Barang</h1>
      <p></p>
      <h2 className="page-title fw-bold breadcrumb-item active fw-bold">
        Silahkan Edit Jenis Barang berikut ini
      </h2>
      <div className="card is-shadowless">
        <div className="card-content ">
          <div className="content">
            <form onSubmit={updateJenis}>
              <p className="has-text-centered">{""}</p>
              <div className="field">
                <label className="label">Jenis Barang</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nama}
                    onChange={(e) => setnama_jenis(e.target.value)}
                    placeholder="nama_jenis jenis barang"
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
                    Update
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

export default FormEditJenis;
