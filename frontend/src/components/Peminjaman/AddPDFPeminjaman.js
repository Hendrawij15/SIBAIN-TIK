import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const PeminjamanPDF = () => {
  const conponentPDF = useRef();
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
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Daftarjenisbarang",
    //onAfterPrint: () => Swal.fire("Data Telah didownload"),
  });

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">
          Berikut ini adalah daftar peminjaman yang akan di cetak...
        </h1>
      </div>
      <div className="row row-cards">
        <div className="col-lg-11 col-xl-12">
          <div className="ms-auto pageheader-btn mb-3">
            <button
              className="btn btn-success mb-3 bi bi-printer"
              onClick={generatePDF}
            >
              Daftar Peminjaman
            </button>
          </div>
          <div className="card">
            <div className="e-table px-0 pb-0 ">
              <div className="table-responsive table-lg ">
                <div ref={conponentPDF} style={{ width: "100%" }}>
                  <p></p>
                  <h1 className="page-title text-center fw-bold">
                    DAFTAR PEMINJAMAN BARANG
                  </h1>
                  <p></p>

                  <table className="table border table-bordered mb-0 ">
                    <thead>
                      <tr className="align-middle text-center table-primary">
                        <th className="text-center fw-bold">NO</th>
                        {/* <th className="text-center fw-bold">ID PEMINJAMAN</th> */}
                        {/* <th className="text-center fw-bold">ID USER</th> */}
                        <th className="text-center fw-bold">NAMA PEMINJAM</th>
                        <th className="text-center fw-bold">NAMA BARANG</th>
                        <th className="text-center fw-bold">
                          TANGGAL_PEMINJAMAN
                        </th>
                        <th className="text-center fw-bold">
                          TANGGAL_PENGEMBALIAN
                        </th>
                        <th className="text-center fw-bold">KETERANGAN</th>
                        <th className="text-center fw-bold">
                          STATUS PEMINJAMAN
                        </th>
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
                          {/* <td className="text-nowrap align-middle">
                            {peminjaman.id}
                          </td> */}
                          {/* <td className="align-middle text-center">
                            {peminjaman.id_user}
                          </td> */}
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
          </div>
          <div className="ms-auto mb-3">
            <Link
              to="/Laporan"
              type="button"
              className="btn btn-primary bi bi-arrow-return-left"
            >
              kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeminjamanPDF;
