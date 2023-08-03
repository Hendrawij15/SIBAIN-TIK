import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormAddBarang = () => {
  const [nama, setNama] = useState("");
  const [no_BMN, setNoBMN] = useState("");
  const [no_inventaris_tik, setNoInvenTik] = useState("");
  const [id_jenis, setIdJenis] = useState("");
  const [kondisi_barang, setKondisi] = useState("");
  const [status_barang, setStatus] = useState("");
  const [tahun, setTahun] = useState("");
  const [merk, setMerk] = useState("");
  const [lokasi_sebelumnya, setLokasiSebelum] = useState("");
  const [lokasi_sekarang, setLokasiSekarang] = useState("");
  const [msg, setMsg] = useState("");
  const [Namajenis, setNamaJenis] = useState([]);
  const navigate = useNavigate();

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

      setNamaJenis(jenis.data);
      //console.log(Jenis.data);
    } catch (err) {
      alert(err);
    }
  };

  const saveBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/tambahbarang", {
        nama: nama,
        no_BMN: no_BMN,
        no_inventaris_tik: no_inventaris_tik,
        id_jenis: id_jenis,
        kondisi_barang: kondisi_barang,
        status_barang: status_barang,
        tahun: tahun,
        merk: merk,
        lokasi_sebelumnya: lokasi_sebelumnya,
        lokasi_sekarang: lokasi_sekarang,
      });
      Swal.fire("Berhasil", "Barang Berhasil ditambahkan.", "success");
      navigate("/data");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Barang Sudah Tersedia!",
      });
    }
  };

  return (
    <div>
      <h1 className="page-title  fw-bold">Halaman Tambah Data Barang</h1>
      <p></p>
      <h2 className="page-title fw-bold breadcrumb-item active fw-bold">
        Silahkan isi form data barang berikut
      </h2>
      <div className="card is-shadowless">
        <div className="card-content  ">
          <div className="content">
            <form onSubmit={saveBarang}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Barang</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Silahkan isi nama barang"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">NO BMN</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={no_BMN}
                    onChange={(e) => setNoBMN(e.target.value)}
                    placeholder="Silahkan tambahkan No BMN barang"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">NO INVENTARIS TIK</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={no_inventaris_tik}
                    onChange={(e) => setNoInvenTik(e.target.value)}
                    placeholder="Silahkan tambahkan jenis barang"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">JENIS BARANG</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select onChange={(e) => setIdJenis(e.target.value)}>
                      <option>-- Pilih Jenis Barang --</option>
                      {Namajenis.map((jenis, index) => (
                        <option value={jenis.id}>{jenis.nama}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">KONDISI BARANG</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={kondisi_barang}
                      onChange={(e) => setKondisi(e.target.value)}
                    >
                      <option>-- Pilih Kondisi Barang --</option>
                      <option value="Baik">Baik</option>
                      <option value="Rusak">Rusak</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">STATUS BARANG</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={status_barang}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>-- Pilih Status Barang --</option>
                      <option value="Tersedia">Tersedia</option>
                      <option value="Dipinjam">Dipinjam</option>
                      <option value="Diperbaiki">Diperbaiki</option>
                      <option value="Digunakan">Digunakan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">TAHUN</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={tahun}
                    onChange={(e) => setTahun(e.target.value)}
                    placeholder="Silahkan tambahkan jenis barang"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">MERK/TYPE</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={merk}
                    onChange={(e) => setMerk(e.target.value)}
                    placeholder="Silahkan tambahkan merk/type barang"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">LOKASI SEBELUMNYA</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={lokasi_sebelumnya}
                    onChange={(e) => setLokasiSebelum(e.target.value)}
                    placeholder="Silahkan tambahkan lokasi sebelumnya"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">LOKASI SEKARANG</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={lokasi_sekarang}
                    onChange={(e) => setLokasiSekarang(e.target.value)}
                    placeholder="Silahkan tambahkan lokasi sekarang"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm rounded-16 me-2  mt-1"
                  >
                    Simpan
                  </button>

                  <a
                    href="/data"
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

export default FormAddBarang;
