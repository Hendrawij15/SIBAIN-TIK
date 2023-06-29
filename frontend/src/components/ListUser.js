import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ListUser() {
  const [users, setUsers] = useState([]);
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
      console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      Swal.fire({
        title: "Yakin ingin menghapus data?",
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
        <h1 className="page-title">HALAMAN DATA USER</h1>
      </div>
      <div className="ms-auto pageheader-btn mb-3">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          + Tambahkan User
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
                  Tambah Data User
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
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Role User</label>
                  <div className="row">
                    <div className="col-md-4 mb-2">
                      <select className="form-control select2 form-select">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="/users" className="btn btn-success mt-1">
                      Save
                    </a>
                    <a href="/users" className="btn btn-danger mt-1">
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
        <div className="col-lg-10 col-xl-12">
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search...."
            />
            <div className="input-group-text btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Daftar Akun
            </li>
          </ol>
          <div className="card">
            <div className="e-table px-1 pb-1">
              <div className="table-responsive table-lg">
                <table className="table border table-bordered mb-0">
                  <thead>
                    <tr className="align-middle text-center">
                      <th className="text-center fw-bold">NO</th>
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
                            <button
                              type="button"
                              className="btn btn-primary btn-sm rounded-11 me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#edituser"
                            >
                              Edit
                            </button>

                            <div
                              className="modal fade"
                              id="edituser"
                              tabindex="-1"
                              aria-labelledby="edituserLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="edituserLabel"
                                    >
                                      Edit Data User
                                    </h5>
                                    <button
                                      type="button"
                                      className="ion-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body ">
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
                                        Email
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="email"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        New Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        Confirm New Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm password"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="form-label">
                                        Role User
                                      </label>
                                      <div className="row">
                                        <div className="col-md-4 mb-2">
                                          <select className="form-control select2 form-select">
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <a
                                          href="/users"
                                          className="btn btn-success mt-1"
                                        >
                                          Update
                                        </a>
                                        <a
                                          href="/users"
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
          <div className="mb-5">
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
}

export default ListUser;
