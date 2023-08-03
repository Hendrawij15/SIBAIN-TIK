import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Users from "../../pages/Users";

function ListUser() {
  const [users, setUsers] = useState([]);
  const [filteruser, setFilterUser] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    ListUser();
  }, []);

  const ListUser = async () => {
    try {
      let user = await axios({
        method: "get",
        url: "http://localhost:3001/users",
      });

      setUsers(user.data);
      setFilterUser(user.data);
    } catch (err) {
      alert(err);
    }
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const searchuser = users.filter((item) =>
        item.nama.toLowerCase().includes(getSearch)
      );
      setUsers(searchuser);
    } else {
      setUsers(filteruser);
    }
  };

  const deleteUser = async (id) => {
    try {
      Swal.fire({
        title: "Yakin ingin menghapus data user?",
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
            url: `http://localhost:3001/delete/${id}`,
          });
          ListUser();
          Swal.fire("Hapus", "Akun telah dihapus.", "success");
        }
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title fw-bold">HALAMAN DATA USER</h1>
      </div>
      <div className="ms-auto pageheader-btn mb-3">
        <Link to="/tambahuser" type="button" className="btn btn-primary">
          + Tambah User
        </Link>
      </div>
      <div className="row row-cards">
        <div className="col-lg-10 col-xl-12">
          <div className="input-group mb-4  col-sm-3 offset-md-9">
            <input
              value={query}
              onChange={(e) => handleSearch(e)}
              type="text"
              className="form-control"
              placeholder="Search user...."
            />
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active fw-bold" aria-current="page">
              Daftar Akun
            </li>
          </ol>
          <div className="card">
            <div className="e-table px2 pb-0">
              <div className="table-responsive table-lg">
                <table className="table border table-bordered mb-0">
                  <thead>
                    <tr className="align-middle text-center table-primary">
                      <th className="text-center fw-bold">NO</th>
                      {/* <th className="text-center fw-bold">ID USER</th> */}
                      <th className="text-center fw-bold">NAMA</th>
                      <th className="text-center fw-bold">EMAIL</th>
                      <th className="text-center fw-bold">ROLE_USER</th>
                      <th className="text-center fw-bold">AKSI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user.id} className="align-middle text-center">
                        <td className="align-middle text-center">
                          {index + 1}
                        </td>
                        {/* <td className="align-middle text-center">{user.id}</td> */}
                        <td className="align-middle text-center">
                          {user.nama}
                        </td>
                        <td className="align-middle text-center">
                          {user.email}
                        </td>
                        <td className="align-middle text-center">
                          {user.role}
                        </td>

                        <td className="text-center align-middle">
                          <div className="btn-group align-top">
                            <Link
                              to={`/updateuser/${user.id}`}
                              type="button"
                              className="btn btn-primary btn-sm rounded-11 me-2"
                            >
                              Edit
                            </Link>
                          </div>
                          <button
                            onClick={() => deleteUser(user.id)}
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
    </div>
  );
}

export default ListUser;
