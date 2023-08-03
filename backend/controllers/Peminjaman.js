import Peminjaman from "../models/TransaksiModel.js";
import User from "../models/UsersModel.js";
import Barang from "../models/BarangModel.js";
import { Op } from "sequelize";

export const listPeminjaman = async (req, res) => {
  try {
    let response;
    if (req.rol === "admin") {
      response = await Peminjaman.findAll({
        attributes: [
          "id",
          "id_user",
          "nama_peminjam",
          "id_barang",
          "tanggal_peminjaman",
          "tanggal_pengembalian",
          "keterangan",
          "status_peminjaman",
        ],
        include: [
          {
            model: User,
            attributes: ["nama", "email"],
          },
          {
            model: Barang,
            attributes: ["id", "nama"],
          },
        ],
      });
    } else {
      response = await Peminjaman.findAll({
        attributes: [
          "id",
          "id_user",
          "nama_peminjam",
          "id_barang",
          "tanggal_peminjaman",
          "tanggal_pengembalian",
          "keterangan",
          "status_peminjaman",
        ],
        include: [
          {
            model: User,
            attributes: ["nama", "email"],
          },
          {
            model: Barang,
            attributes: ["id", "nama"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getPeminjamanbyId = async (req, res) => {
  try {
    const peminjaman = await Peminjaman.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!peminjaman)
      return res.status(404).json({ msg: "Data Peminjaman tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await Peminjaman.findOne({
        attributes: [
          "id",
          "id_user",
          "id_barang",
          "nama_peminjam",
          "tanggal_peminjaman",
          "tanggal_pengembalian",
          "keterangan",
          "status_peminjaman",
        ],
        where: {
          id: peminjaman.id,
        },
        include: [
          {
            model: User,
            attributes: ["nama", "email"],
          },
          {
            model: Barang,
            attributes: ["nama"],
          },
        ],
      });
    } else {
      response = await Peminjaman.findOne({
        attributes: [
          "id",
          "id_user",
          "nama_peminjam",
          "id_barang",
          "tanggal_peminjaman",
          "tanggal_pengembalian",
          "keterangan",
          "status_peminjaman",
        ],
        where: {
          [Op.and]: [{ id: peminjaman.id }, { id_user: req.id_user }],
        },
        include: [
          {
            model: User,
            attributes: ["nama", "email"],
          },
          {
            model: Barang,
            attributes: ["nama"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const tambahPeminjaman = async (req, res) => {
  const {
    nama_peminjam,
    id_barang,
    tanggal_peminjaman,
    tanggal_pengembalian,
    keterangan,
    // status_peminjaman,
  } = req.body;
  try {
    await Peminjaman.create({
      id_user: req.userId,
      nama_peminjam: nama_peminjam,
      id_barang: id_barang,
      tanggal_peminjaman: tanggal_peminjaman,
      tanggal_pengembalian: tanggal_pengembalian,
      keterangan: keterangan,
      // status_peminjaman: status_peminjaman,
    });
    res.status(201).json({ msg: "Peminjaman Barang Berhasil" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updatePeminjaman = async (req, res) => {
  try {
    const peminjaman = await Peminjaman.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!peminjaman)
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    const {
      id_user,
      nama_peminjam,
      id_barang,
      tanggal_peminjaman,
      tanggal_pengembalian,
      keterangan,
      status_peminjaman,
    } = req.body;
    if (req.role !== "admin")
      return res.status(500).json({ msg: "akses terlarang" });

    await Peminjaman.update(
      {
        id_user,
        nama_peminjam,
        id_barang,
        tanggal_peminjaman,
        tanggal_pengembalian,
        keterangan,
        status_peminjaman,
      },
      {
        where: {
          id: peminjaman.id,
        },
      }
    );

    res.status(200).json({ msg: "Peminjaman berhasil di Update" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deletePeminjaman = async (req, res) => {
  try {
    const peminjaman = await Peminjaman.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!peminjaman)
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    const {
      id_user,
      nama_peminjam,
      id_barang,
      tanggal_peminjaman,
      tanggal_pengembalian,
      keterangan,
      status_peminjaman,
    } = req.body;
    if (req.role !== "admin")
      return res.status(500).json({ msg: "akses terlarang" });

    await Peminjaman.destroy({
      where: {
        id: peminjaman.id,
      },
    });

    res.status(200).json({ msg: "Data peminjaman telah dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const jumlahPinjam = async (req, res) => {
  try {
    const response = await Peminjaman.count();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

