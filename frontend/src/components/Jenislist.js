import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { useNavigate, useParams } from "react-router-dom";

const Jenislist = () => {
  const [Jenis, setJenis] = useState([]);
  const [nama, setNama] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    listJenis();
    getJenisById(id);
  }, []);

  const listJenis = async () => {
    // LIST JENIS//
    try {
      let jenis = await axios({
        method: "get",
        url: "http://localhost:3001/jenis",
      });

      setJenis(jenis.data);
      //console.log(Jenis.data);
    } catch (err) {
      alert(err);
    }
  };

  const deleteJenis = async (id) => {
    //DELETE JENIS//
    try {
      Swal.fire({
        title: "Yakin ingin menghapus data Jenis Barang?",
        text: "Data yang sudah dihapus, tidak bisa dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            method: "delete",
            url: `http://localhost:3001/deletejenis/${id}`,
          });
          listJenis();
          Swal.fire("Hapus", "Jenis Barang telah dihapus.", "success");
        }
      });
    } catch (err) {
      alert(err);
    }
  };
  const getJenisById = async (id) => {
    //GET JENIS ID//
    try {
      let data = await axios({
        method: "get",
        url: `http://localhost:3001/jenis/${id}`,
      });
      // console.log(jenis);
      setNama(data.nama);
    } catch (err) {
      alert(err);
    }
  };

  const addJenis = async () => {
    //ADD JENIS//
    try {
      Swal.fire({
        title: "Tambahkan Barang?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Tambahkan!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            method: "POST",
            url: `http://localhost:3001/tambahjenis`,
            data: {
              nama: nama,
            },
          });
          listJenis();
          Swal.fire("Berhasil", "Jenis Barang telah ditambahkan.", "success");
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    addJenis();
    navigate("/jenis");
  };

  const editJenis = async (id) => {
    //EDIT JENIS//
    try {
      Swal.fire({
        title: "Update Jenis Barang?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Update!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            method: "PUT",
            url: `http://localhost:3001/jenisupdate/${id}`,
            data: {
              nama: nama,
            },
          });
          listJenis();

          Swal.fire("Tambah", "Jenis Barang telah diupdate.", "success");
        }
      });
    } catch (err) {
      Swal.fire("Gagal!", "gagal Update Jenis Barang", "error");
    }
  };

  const submitUpdate = async (e) => {
    e.preventDefault();
    editJenis();
    navigate("/jenis");
  };
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">HALAMAN JENIS BARANG</h1>
      </div>
      <div className="ms-auto pageheader-btn mb-3">
        <button
          type="button"
          className="btn btn-primary"
          data-dismiss="modal"
          data-bs-toggle="modal"
          data-bs-target="#tambahjenis"
        >
          + Tambahkan Jenis Barang
        </button>
        <div
          className="modal fade"
          id="tambahjenis"
          tabindex="-1"
          aria-labelledby="tambahjenisLabel"
          aria-hidden="false"
          aria-label="Close"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="tambahjenisLabel">
                  Tambah Jenis
                </h5>
                <button
                  type="button"
                  className="ion-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Nama Jenis Barang</label>
                  <input
                    className="form-control"
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Silahkan isi jenis barang"
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a
                      type="submit"
                      data-dismiss="modal"
                      className="btn btn-success mt-1"
                      onClick={(e) => submitHandler(e)}
                    >
                      Save
                    </a>
                    <a href="/jenis" className="btn btn-danger mt-1">
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cards">
        <div className="col-lg-6 col-xl-12">
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <div className="input-group-text btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              Daftar Jenis Barang UPT TIK Unsri
            </li>
          </ol>
          <div className="card">
            {/* <AddJenis /> */}
            <div className="e-table px-1 pb-1">
              <div className="table-responsive table-lg">
                <table className="table border table-bordered mb-0">
                  <thead>
                    <tr className="align-middle text-center">
                      <th className="text-center fw-bold">NO</th>
                      <th className="text-center fw-bold">ID JENIS</th>
                      <th className="text-center fw-bold">NAMA JENIS</th>
                      <th className="text-center fw-bold">AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Jenis.map((jenis, index) => (
                      <tr key={jenis.id} className="align-middle text-center">
                        <td className="align-middle text-center">
                          {index + 1}
                        </td>
                        <td className="text-nowrap align-middle">{jenis.id}</td>
                        <td className="text-nowrap align-middle">
                          {jenis.nama}
                        </td>

                        <td className="text-center align-middle">
                          <div className="btn-group align-top">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm rounded-1 me-1"
                              data-bs-toggle="modal"
                              data-bs-target="#editjenis"
                            >
                              Edit
                            </button>

                            <div
                              className="modal fade"
                              id="editjenis"
                              tabindex="-1"
                              aria-labelledby="editjenisLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="editjenisLabel"
                                    >
                                      Edit Jenis Barang
                                    </h5>
                                    <button
                                      type="button"
                                      className="ion-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body ">
                                    <div className="form-group">
                                      <label className="form-label">
                                        Nama Jenis
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        value={jenis.nama}
                                        onChange={(e) =>
                                          setNama(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div className="field">
                                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <a
                                          type="submit"
                                          onClick={(e) =>
                                            submitUpdate(e)
                                          }
                                          className="btn btn-success mt-1"
                                        >
                                          Update
                                        </a>
                                        <a
                                          href="/jenis"
                                          className="btn btn-danger mt-1"
                                        >
                                          Cancel
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => deleteJenis(jenis.id)}
                            className="btn btn-primary btn-sm rounded-11 me-2"
                            type="button"
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <ul className="pagination float-end">
              <li className="page-item page-prev disabled">
                <a
                  className="page-link"
                  href="javascript:void(0);"
                  tabindex="-1"
                >
                  Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="javascript:void(0);">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  5
                </a>
              </li>
              <li className="page-item page-next">
                <a className="page-link" href="javascript:void(0);">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jenislist;
