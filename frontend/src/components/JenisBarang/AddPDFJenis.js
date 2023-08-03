import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const Jenislist = () => {
  const conponentPDF = useRef();
  const [Jenis, setJenis] = useState([]);

  useEffect(() => {
    listJenis();
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
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Daftarjenisbarang",
    //onAfterPrint: () => Swal.fire("Data Telah didownload"),
  });
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title text-center">
          Berikut ini adalah data jenis barang yang akan di cetak...{" "}
        </h1>
      </div>
      <div className="row row-cards">
        <div className="col-lg-6 col-xl-12">
          <div className="ms-auto pageheader-btn mb-3">
            <button
              className="btn btn-success mb-3 bi bi-printer"
              onClick={generatePDF}
            >
              Jenis Barang
            </button>
          </div>
          <div className="card">
            <div className="e-table px-0 pb-0 ">
              <div className="table-responsive table-lg ">
                <div ref={conponentPDF} style={{ width: "100%" }}>
                  <p></p>
                  <h1 className="page-title text-center fw-bold">
                    DAFTAR JENIS BARANG UPT TIK UNSRI
                  </h1>
                  <h3 className="page-title text-center fw-bold">
                    TAHUN 2023{" "}
                  </h3>
                  <table className="table border table-bordered mb-9 ">
                    <thead>
                      <tr className="align-middle text-center table-primary">
                        <th className="text-center fw-bold">NO</th>
                        {/* <th className="text-center fw-bold">ID JENIS</th> */}
                        <th className="text-center fw-bold">NAMA JENIS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Jenis.map((jenis, index) => (
                        <tr key={jenis.id} className="align-middle text-center">
                          <td className="align-middle text-center">
                            {index + 1}
                          </td>
                          {/* <td className="text-nowrap align-middle">
                            {jenis.id}
                          </td> */}
                          <td className="text-nowrap align-middle">
                            {jenis.nama}
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

export default Jenislist;
