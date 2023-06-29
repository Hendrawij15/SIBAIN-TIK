import React, { useState, useEffect } from "react";
import axios from "axios";

const PeminjamanList = () => {
  const [Peminjaman, setPeminjaman] = useState([]);
  useEffect(() => {
    listPeminjaman();
  }, []);

  const listPeminjaman = async () => {
    try {
      let peminjaman = await axios({
        method: "get",
        url: "http://localhost:3001/peminjaman",
      });

      setPeminjaman(peminjaman.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const deletePeminjaman = async (id) => {
    await axios.delete(`http://localhost:3001/peminjaman/${id}`);
    listPeminjaman();
  };
  return (
    <div>
      <div class="page-header">
        <h1 class="page-title">HALAMAN PEMINJAMAN BARANG</h1>
      </div>
      <div class="ms-auto pageheader-btn mb-3">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          + Peminjaman Barang
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Tambah Peminjaman Barang
                </h5>
                <button
                  type="button"
                  class="ion-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="form-group">
                  <label className="form-label">UNIT PEMINJAM</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Silahkan isi id peminjaman"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">ID_BARANG</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Silahkan isi id barang"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">TANGGAL_PEMINJAMAN</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">TANGGAL_PENGEMBALIAN</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">KETERANGAN</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Isi keperluan peminjaman"
                  />
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="/peminjaman" className="btn btn-success mt-1">
                      Save
                    </a>
                    <a href="/peminjaman" className="btn btn-danger mt-1">
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cards">
        <div class="col-lg-11 col-xl-12">
          <div class="input-group mb-4">
            <input type="text" class="form-control" placeholder="" />
            <div class="input-group-text btn btn-primary">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Daftar Peminjaman Barang
            </li>
          </ol>
          <div class="card">
            <div class="e-table px-1 pb-1">
              <div class="table-responsive table-lg">
                <table class="table table-bordered text-nowrap border-bottom w-100" id="responsive-datatable">
                  <thead>
                    <tr className="align-middle text-center">
                      <th className="text-center fw-bold">NO</th>
                      <th className="text-center fw-bold">UNIT PEMINJAM</th>
                      <th className="text-center fw-bold">ID_JENIS BARANG</th>
                      <th className="text-center fw-bold">ID_BARANG</th>
                      <th className="text-center fw-bold">
                        TANGGAL_PEMINJAMAN
                      </th>
                      <th className="text-center fw-bold">
                        TANGGAL_PENGEMBALIAN
                      </th>
                      <th className="text-center fw-bold">KETERANGAN</th>

                      <th class="text-center">AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Peminjaman.map((peminjaman, index) => (
                      <tr
                        key={peminjaman.id}
                        className="align-middle text-center"
                      >
                        <td class="align-middle text-center"> {index + 1}</td>
                        <td class="align-middle text-center">
                          {peminjaman.id_user}
                        </td>
                        <td class="text-nowrap align-middle">
                          {peminjaman.id_jenis}
                        </td>
                        <td class="text-nowrap align-middle">
                          {peminjaman.id_barang}
                        </td>
                        <td class="text-nowrap align-middle">
                          {peminjaman.tanggal_peminjaman}
                        </td>
                        <td class="text-nowrap align-middle">
                          {peminjaman.tanggal_pengembalian}
                        </td>
                        <td class="text-nowrap align-middle">
                          {peminjaman.keterangan}
                        </td>
                        <td className="text-center align-middle">
                          <div className="btn-group align-top">
                            <button
                              type="button"
                              class="btn btn-primary btn-sm rounded-11 me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#edituser"
                            >
                              Edit
                            </button>

                            <div
                              class="modal fade"
                              id="edituser"
                              tabindex="-1"
                              aria-labelledby="edituserLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="edituserLabel">
                                      Edit Data User
                                    </h5>
                                    <button
                                      type="button"
                                      class="ion-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div class="modal-body">
                                    <div className="form-group">
                                      <label className="form-label">
                                        ID_USER
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Silahkan isi id peminjaman"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        ID_BARANG
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Silahkan isi id barang"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        TANGGAL_PEMINJAMAN
                                      </label>
                                      <input
                                        type="date"
                                        className="form-control"
                                        placeholder="password"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        TANGGAL_PENGEMBALIAN
                                      </label>
                                      <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Confirm password"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        KETERANGAN
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Isi keperluan peminjaman"
                                      />
                                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <a
                                          href="/peminjaman"
                                          className="btn btn-success mt-1"
                                        >
                                          Save
                                        </a>
                                        <a
                                          href="/peminjaman"
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
                            href="/users"
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
          <div class="mb-5">
            <ul class="pagination float-end">
              <li class="page-item page-prev disabled">
                <a class="page-link" href="javascript:void(0);" tabindex="-1">
                  Prev
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript:void(0);">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">
                  4
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">
                  5
                </a>
              </li>
              <li class="page-item page-next">
                <a class="page-link" href="javascript:void(0);">
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

export default PeminjamanList;
