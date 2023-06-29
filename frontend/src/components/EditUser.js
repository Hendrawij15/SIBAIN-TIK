import React from "react";

const EditUser = () => {
  return (
    <div className="card" id="modal">
      <div className="card-body">
        <div className="modal d-block pos-static">
          <div className="modal-dialog" role="document">
            <div className="modal-content modal-content-demo">
              <div className="modal-header">
                <h6 className="modal-title">Update Data User</h6>
                <button
                  aria-label="Close"
                  className="btn-close"
                  data-bs-dismiss="modal"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
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
                    <a href="/users" className="btn btn-info mt-1">
                      Update
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
    </div>
  );
};

export default EditUser;
