import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Datalist = () => {
  const [Barang, setBarang] = useState([]);
  const [filterbarang, setFilterBarang] = useState([]);
  const [query, setQuery] = useState("");

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
      setFilterBarang(barang.data);
      console.log(barang.data);
    } catch (err) {
      alert(err);
    }
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const searchjenis = Barang.filter((barang) =>
        barang.jenis_barang.nama.toLowerCase().includes(getSearch)
      );
      setBarang(searchjenis);
    } else {
      setBarang(filterbarang);
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
        <Link to="/tambahbarang" type="button" className="btn btn-primary">
          + Tambah Barang
        </Link>
      </div>
      <div className="row row-cards">
        <div className="col-lg-11 col-xl-12">
          <div className="input-group mb-4 col-sm-3 offset-md-9">
            <input
              value={query}
              onChange={(e) => handleSearch(e)}
              type="text"
              className="form-control"
              placeholder="Search data barang..."
            />
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
                    <tr className="align-middle text-center col-auto table-primary">
                      <th className="text-center fw-bold">NO</th>
                      <th className="text-center fw-bold">NAMA BARANG</th>
                      <th className="text-center fw-bold">NO BMN</th>
                      <th className="text-center fw-bold">NO INVENTARIS TIK</th>
                      <th className="text-center fw-bold">JENIS BARANG</th>
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
                        <td className="text-nowrap align-middle">
                          {barang.no_BMN}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.no_inventaris_tik}
                        </td>
                        <td className="text-nowrap align-middle">
                          {barang.jenis_barang.nama}
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
                            <Link
                              to={`/updatebarang/${barang.id}`}
                              type="button"
                              className="btn btn-primary btn-sm rounded-11 me-2"
                            >
                              Edit
                            </Link>
                          </div>
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
          {/* <div className="mb-5">
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
                <a className="page-link" href="/data">
                  2
                </a>
              </li>
              <li className="page-item page-next">
                <a className="page-link" href="/data">
                  Next
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Datalist;
