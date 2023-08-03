import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Jenislist = () => {
  const [Jenis, setJenis] = useState([]);
  const [filterjenis, setFilterJenis] = useState([]);
  const [query, setQuery] = useState("");
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
      setFilterJenis(jenis.data);
      //console.log(Jenis.data);
    } catch (err) {
      alert(err);
    }
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const searchjenis = Jenis.filter((item) =>
        item.nama.toLowerCase().includes(getSearch)
      );
      setJenis(searchjenis);
    } else {
      setJenis(filterjenis);
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
      Swal.fire("Jenis Barang gagal dihapus.");
    }
  };
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title text-center">HALAMAN JENIS BARANG</h1>
      </div>
      <div className="ms-auto pageheader-btn mb-3">
        <Link to="/tambahjenis" type="button" className="btn btn-primary">
          + Tambahkan Jenis Barang
        </Link>
      </div>
      <div className="row row-cards">
        <div className="col-lg-6 col-xl-12">
          <div className="input-group mb-4  col-sm-3 offset-md-9">
            <input
              value={query}
              onChange={(e) => handleSearch(e)}
              type="text"
              className="form-control"
              placeholder="Search jenis barang..."
            />
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active fw-bold">
              Daftar Jenis Barang UPT TIK Unsri
            </li>
          </ol>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered text-nowrap border-bottom"
                id="Jenislist"
              >
                <thead>
                  <tr className="align-middle text-center table-primary">
                    <th className="text-center fw-bold">NO</th>
                    {/* <th className="text-center fw-bold">ID JENIS</th> */}
                    <th className="text-center fw-bold">NAMA JENIS</th>
                    <th className="text-center fw-bold">NO BMN</th>
                    <th className="text-center fw-bold">AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  {Jenis.map((jenis, index) => (
                    <tr key={jenis.id} className="align-middle text-center">
                      <td className="align-middle text-center">{index + 1}</td>
                      {/* <td className="text-nowrap align-middle">{jenis.id}</td> */}
                      <td className="text-nowrap align-middle">{jenis.nama}</td>
                      <td className="text-nowrap align-middle">
                        {jenis.no_bmn}
                      </td>

                      <td className="text-center align-middle">
                        <div className="btn-group align-top">
                          <Link
                            to={`/editjenis/${jenis.id}`}
                            type="button"
                            className="btn btn-primary btn-sm rounded-11 me-2"
                          >
                            Edit
                          </Link>
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
  );
};

export default Jenislist;
