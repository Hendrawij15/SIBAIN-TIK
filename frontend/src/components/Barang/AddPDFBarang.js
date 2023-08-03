import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const PrintDatalist = () => {
  const conponentPDF = useRef();
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
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Daftarjenisbarang",
    //onAfterPrint: () => Swal.fire("Data Telah didownload"),
  });

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">
          Berikut ini adalah data barang UPT TIK Unsri yang akan di cetak..
        </h1>
      </div>
      <div className="row row-cards">
        <div className="col-lg-11 col-xl-12">
          <div className="ms-auto pageheader-btn mb-3">
            <button
              className="btn btn-success mb-3 bi bi-printer"
              onClick={generatePDF}
            >
              Data Barang
            </button>
          </div>
          <div className="card">
            <div className="e-table px-0 pb-0">
              <div className="table-responsive table-lg">
                <div ref={conponentPDF} style={{ width: "100%" }}>
                  <p></p>
                  <h1 className="page-title text-center fw-bold">
                    DAFTAR BARANG UPT TIK UNSRI
                  </h1>
                  <h3 className="page-title text-center fw-bold">
                    TAHUN 2023{" "}
                  </h3>
                  <table className="table border table-bordered mb-0">
                    <thead>
                      <tr className="align-middle text-center col-auto table-primary">
                        <th className="text-center fw-bold">NO</th>
                        <th className="text-center fw-bold">NAMA</th>
                        <th className="text-center fw-bold">NO BMN</th>
                        <th className="text-center fw-bold">
                          NO INVENTARIS TIK
                        </th>
                        <th className="text-center fw-bold">JENIS BARANG</th>
                        <th className="text-center fw-bold">TAHUN</th>
                        <th className="text-center fw-bold">MERK/TYPE</th>
                        <th className="text-center fw-bold">
                          LOKASI SEBELUMNYA
                        </th>
                        <th className="text-center fw-bold">LOKASI SEKARANG</th>
                        <th className="text-center fw-bold">KONDISI</th>
                        <th className="text-center fw-bold">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Barang.map((barang, index) => (
                        <tr
                          key={barang.id}
                          className="align-middle text-center"
                        >
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

export default PrintDatalist;
