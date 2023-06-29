import React from "react";
import ListUser from "./ListUser.js";

const AddUser = () => {
  return (
    <div
      class="modal fade"
      id="adduser"
      tabindex="-1"
      aria-labelledby="adduserLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content"></div>
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
            <label className="form-label">Email</label>
            <input type="text" className="form-control" placeholder="email" />
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
  );
};

export default AddUser;
