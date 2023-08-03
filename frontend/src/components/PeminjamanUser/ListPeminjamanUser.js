import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PeminjamanList = () => {
  const [Peminjaman, setPeminjaman] = useState([]);
  const [filterpeminjaman, setFilterPeminjaman] = useState([]);
  const [query, setQuery] = useState("");

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
      setFilterPeminjaman(peminjaman.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const searchpeminjaman = Peminjaman.filter((item) =>
        item.nama_peminjam.toLowerCase().includes(getSearch)
      );
      setPeminjaman(searchpeminjaman);
    } else {
      setPeminjaman(filterpeminjaman);
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">HALAMAN PEMINJAMAN BARANG</h1>
      </div>
      <p>
        Silahkan periksa status peminjaman barang anda di kolom status
        peminjaman!
      </p>
      <div className="ms-auto pageheader-btn mb-3">
        <Link to="/tambahpeminjaman" type="button" className="btn btn-primary">
          + Peminjaman Barang
        </Link>
      </div>
      <div className="row row-cards">
        <div className="col-lg-11 col-xl-12">
          <div className="input-group mb-4  col-sm-3 offset-md-9">
            <input
              value={query}
              onChange={(e) => handleSearch(e)}
              type="text"
              className="form-control"
              placeholder="Search peminjaman...."
            />
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active fw-bold" aria-current="page">
              Daftar Peminjaman Barang
            </li>
          </ol>
          <div className="card">
            <div className="e-table px-0 pb-0 ">
              <div className="table-responsive table-lg ">
                <table className="table border table-bordered mb-0 ">
                  <thead>
                    <tr className="align-middle text-center table-primary">
                      <th className="text-center fw-bold">NO</th>
                      <th className="text-center fw-bold">NAMA PEMINJAM</th>
                      <th className="text-center fw-bold">PENERIMA BARANG</th>
                      <th className="text-center fw-bold">NAMA BARANG</th>
                      <th className="text-center fw-bold">
                        TANGGAL_PEMINJAMAN
                      </th>
                      <th className="text-center fw-bold">
                        TANGGAL_PENGEMBALIAN
                      </th>
                      <th className="text-center fw-bold">KETERANGAN</th>
                      <th className="text-center fw-bold">STATUS PEMINJAMAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Peminjaman.map((peminjaman, index) => (
                      <tr
                        key={peminjaman.id}
                        className="align-middle text-center"
                      >
                        <td className="align-middle text-center">
                          {" "}
                          {index + 1}
                        </td>
                        <td className="align-middle text-center">
                          {peminjaman.user.nama}
                        </td>
                        <td className="text-nowrap align-middle">
                          {peminjaman.nama_peminjam}
                        </td>
                        <td className="text-nowrap align-middle">
                          {peminjaman.barang.nama}
                        </td>
                        <td className="text-nowrap align-middle">
                          {peminjaman.tanggal_peminjaman}
                        </td>
                        <td className="text-nowrap align-middle">
                          {peminjaman.tanggal_pengembalian}
                        </td>
                        <td className="text-nowrap align-middle">
                          {peminjaman.keterangan}
                        </td>
                        <td className="text-nowrap align-middle">
                          {peminjaman.status_peminjaman}
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
              <li className="page-item page-next">
                <a className="page-link" href="javascript:void(0);">
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

export default PeminjamanList;
