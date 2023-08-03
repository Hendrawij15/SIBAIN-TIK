import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddPeminjaman = () => {
  const [id_user] = useState("");
  const [nama_peminjam, setNamaPeminjam] = useState("");
  const [id_barang, setIdBarang] = useState("");
  const [tanggal_peminjaman, setTanggalPinjam] = useState("");
  const [tanggal_pengembalian, setTanggalKembali] = useState("");
  const [keterangan, setKeterangan] = useState("");
  // const [status_peminjaman, setStatus] = useState("");
  const [barang, setBarang] = useState([]);
  const [, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    listData();
    ListUser();
  }, []);

  const listData = async () => {
    try {
      let barang = await axios({
        method: "get",
        url: "http://localhost:3001/barangpinjam",
      });

      setBarang(barang.data);
      // console.log(users.data);
    } catch (err) {
      alert(err);
    }
  };

  const ListUser = async () => {
    try {
      let user = await axios({
        method: "get",
        url: "http://localhost:3001/users",
      });

      setUsers(user.data);
    } catch (err) {
      alert(err);
    }
  };

  const savePeminjaman = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("http://localhost:3001/pinjambarang", {
      //   id_user: id_user,
      //   nama_peminjam: nama_peminjam,
      //   id_barang: id_barang,
      //   tanggal_peminjaman: tanggal_peminjaman,
      //   tanggal_pengembalian: tanggal_pengembalian,
      //   keterangan: keterangan,
      //   status_peminjaman: status_peminjaman,
      // });

      // await axios.patch(`http://localhost:3001/updatestatusbarang/${id}`, {
      //   status_barang: "Dipinjam",
      // });
      await Promise.all([
        axios.post("http://localhost:3001/pinjambarang", {
          id_user: id_user,
          nama_peminjam: nama_peminjam,
          id_barang: id_barang,
          tanggal_peminjaman: tanggal_peminjaman,
          tanggal_pengembalian: tanggal_pengembalian,
          keterangan: keterangan,
          // status_peminjaman: status_peminjaman,
        }),
        axios.patch(`http://localhost:3001/updatestatusbarang/${id_barang}`, {
          status_barang: "Dipinjam",
        }),
      ]);

      navigate("/peminjaman");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="page-title  fw-bold">HALAMAN TAMBAH PEMINJAMAN BARANG</h1>
      <p></p>
      <h4 className="page-title fw-bold breadcrumb-item active fw-bold">
        Silahkan isi form berikut untuk meminjam barang!!
      </h4>
      <div className="card is-shadowless">
        <div className="card-content  ">
          <div className="content">
            <form onSubmit={savePeminjaman}>
              <p className="has-text-centered">{msg}</p>
              {/* <div className="field">
                <label className="label">ID USER</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select onChange={(e) => setIdUser(e.target.value)}>
                      <option>--Pilih ID User--</option>
                      {users.map((user, index) => (
                        <option value={user.id}>{user.nama}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div> */}
              <div className="field">
                <label className="label">PENERIMA BARANG</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nama_peminjam}
                    onChange={(e) => setNamaPeminjam(e.target.value)}
                    placeholder="Silahkan isi nama peminjam"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">NAMA BARANG</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select onChange={(e) => setIdBarang(e.target.value)}>
                      <option>--Pilih Nama Barang berikut--</option>
                      {barang.map((barang, index) => (
                        <option value={barang.id}>{barang.nama}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">TANGGAL PEMINJAMAN</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tanggal_peminjaman}
                    onChange={(e) => setTanggalPinjam(e.target.value)}
                    placeholder="Silahkan pilih Tanggal Peminjaman"
                  />
                </div>
                <div className="field">
                  <label className="label">TANGGAL PENGEMBALIAN</label>
                  <div className="control">
                    <input
                      type="date"
                      className="input"
                      value={tanggal_pengembalian}
                      onChange={(e) => setTanggalKembali(e.target.value)}
                      placeholder="Silahkan pilih tanggal pengembalian"
                    />
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">KETERANGAN</label>
                <div className="control">
                  <textarea
                    type="text"
                    className="input"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                    placeholder="Silahkan isi keterangan peminjaman barang"
                  />
                </div>
              </div>
              {/* <div className="field">
                <label className="label">STATUS PEMINJAMAN</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={status_peminjaman}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>-- Pilih Status Peminjaman --</option>
                      <option value="Disetujui">Disetujui</option>
                      <option value="Ditolak">Ditolak</option>
                      <option value="Dikembalikan">Dikembalikan</option>
                    </select>
                  </div>
                </div>
              </div> */}
              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm rounded-16 me-2  mt-1"
                  >
                    Simpan
                  </button>

                  <a
                    href="/peminjaman"
                    className="btn btn-danger btn-sm rounded-16 me-2  mt-1"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddPeminjaman;
