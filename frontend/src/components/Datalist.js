import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Datalist = () => {
  const [Barang, setBarang] = useState([]);
  useEffect(() => {
    listData();
  }, []);

  const listData = async () => {
    try {
      let barang = await axios({
        method: "get",
        url: "http://localhost:3001/barang",
      });

      setBarang(barang.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const deleteBarang = async (id) => {
    try {
      Swal.fire({
        title: "Yakin ingin menghapus data Barang?",
        text: "Data yang sudah dihapus, tidak bisa dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            method: "delete",
            url: `http://localhost:3001/deletebarang/${id}`,
          });
          listData();
          Swal.fire("Berhasil", "Data Barang telah dihapus.", "success");
        }
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">HALAMAN DATA BARANG</h1>
      </div>
      <div className="ms-auto pageheader-btn mb-4">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          + Tambah Barang
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Tambah Data Barang
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
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="silahkan isi nama"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">NO_BMN</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Silahkan masukan nomor BMN"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">No Inventaris Tik</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Silahkan Masukan No Inventaris Tik"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Id Barang</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="silahkan pilih Id jenis barang"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Tahun</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="silahkan masukkan tahun barang"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Merk/Type</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="silahkan masukan merk/type barang"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Lokasi Sebelumnya</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Silahkan masukkan lokasi barang sebelumya"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Lokasi Sekarang</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Silahkan Masukkan lokasi Barang sekarang"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">KONDISI_BARANG</label>
                  <div className="row">
                    <div className="col-md-4 mb-2">
                      <select className="form-control select2 form-select">
                        <option value="">Baik</option>
                        <option value="">Rusak</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">STATUS_BARANG</label>
                  <div className="row">
                    <div className="col-md-5 mb-2">
                      <select className="form-control select2 form-select">
                        <option value="">Dipinjam</option>
                        <option value="">Tersedia</option>
                        <option value="">Digunakan</option>
                        <option value="">Dalam Perbaikan</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="/data" className="btn btn-success mt-1">
                      Save
                    </a>
                    <a href="/data" className="btn btn-danger mt-1">
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
        <div className="col-lg-11 col-xl-12">
          <div className="input-group mb-4">
            <input type="text" className="form-control" placeholder="" />
            <div className="input-group-text btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <ol className="breadcrumb fw-bold">
            <li className="breadcrumb-item active " aria-current="page">
              Daftar Barang UPT TIK Universitas Sriwijaya
            </li>
          </ol>
          <div className="card">
            <div className="e-table px-0 pb-0">
              <div className="table-responsive table-lg">
                <table className="table border table-bordered mb-0">
                  <thead>
                    <tr className="align-middle text-center col-auto">
                      <th className="text-center fw-bold">NO</th>
                      <th className="text-center fw-bold">NAMA</th>
                      <th className="text-center fw-bold">ID_BARANG</th>
                      <th className="text-center fw-bold">NO BMN</th>
                      <th className="text-center fw-bold">NO INVENTARIS TIK</th>
                      <th className="text-center fw-bold">ID JENIS</th>
                      <th className="text-center fw-bold">TAHUN</th>
                      <th className="text-center fw-bold">MERK/TYPE</th>
                      <th className="text-center fw-bold">LOKASI SEBELUMNYA</th>
                      <th className="text-center fw-bold">LOKASI SEKARANG</th>
                      <th className="text-center fw-bold">KONDISI</th>
                      <th className="text-center fw-bold">STATUS</th>
                      <th className="text-center fw-bold col-auto">AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Barang.map((barang, index) => (
                      <tr key={barang.id} className="align-middle text-center">
                        <td className="align-middle text-center">
                          {index + 1}
                        </td>
                        <td className="align-middle text-center">
                          {barang.nama}
                        </td>
                        <td className="align-middle text-center">
                          {barang.id}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.no_BMN}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.no_inventaris_tik}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.id_jenis}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.tahun}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.merk}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.lokasi_sebelumnya}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.lokasi_sekarang}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.kondisi_barang}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.status_barang}
                        </td>

                        <td className="text-center align-middle">
                          <div className="btn-group align-top">
                            <button
                              type="button"
                              class="btn btn-primary btn-sm rounded-10 me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#editdata"
                            >
                              Edit
                            </button>

                            <div
                              class="modal fade"
                              id="editdata"
                              tabindex="-1"
                              aria-labelledby="editdataLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="editdataLabel">
                                      Tambah Data Barang
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
                                      <label className="form-label">Nama</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="silahkan isi nama"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        NO_BMN
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Silahkan masukan nomor BMN"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        No Inventaris Tik
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Silahkan Masukan No Inventaris Tik"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        Id Barang
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="silahkan pilih Id jenis barang"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        Tahun
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="silahkan masukkan tahun barang"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        Merk/Type
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="silahkan masukan merk/type barang"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        Lokasi Sebelumnya
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Silahkan masukkan lokasi barang sebelumya"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        Lokasi Sekarang
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Silahkan Masukkan lokasi Barang sekarang"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        KONDISI_BARANG
                                      </label>
                                      <div className="row">
                                        <div className="col-md-4 mb-2">
                                          <select className="form-control select2 form-select">
                                            <option value="">Baik</option>
                                            <option value="">Rusak</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        STATUS
                                      </label>
                                      <div className="row">
                                        <div className="col-md-3 mb-0">
                                          <select className="form-control select2 form-select">
                                            <option value="">Dipinjam</option>
                                            <option value="">Tersedia</option>
                                            <option value="">
                                              Dalam Perbaikan
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <a
                                          href="/data"
                                          className="btn btn-success mt-1"
                                        >
                                          Save
                                        </a>
                                        <a
                                          href="/data"
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
                          <br></br>
                          <button
                            onClick={() => deleteBarang(barang.id)}
                            className="btn btn-primary btn-sm rounded-7 me-2"
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
                <a className="page-link" href="/data(0);" tabindex="-1">
                  Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="/data">
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

export default Datalist;
