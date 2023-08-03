import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Jenislist = () => {
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

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title text-center">
          Silahkan klik menu berikut untuk mencetak data yang dibutuhkan..
        </h1>
      </div>
      <div className="d-grid gap-5 d-md-flex d-md-block">
        <Link
          to="/jenispdf"
          type="button"
          className="btn btn-primary bi bi-file-earmark-pdf-fill"
        >
          Halaman Cetak Jenis Barang
        </Link>

        <Link
          to="/barangpdf"
          type="button"
          className="btn btn-primary bi bi-file-earmark-pdf-fill"
        >
          Halaman Cetak Data Barang
        </Link>

        <Link
          to="/peminjamanpdf"
          type="button"
          className="btn btn-primary bi bi-file-earmark-pdf-fill"
        >
          Halaman Cetak Peminjaman Barang
        </Link>
      </div>
    </div>
  );
};

export default Jenislist;
