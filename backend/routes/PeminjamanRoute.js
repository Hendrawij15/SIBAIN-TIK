import express from "express";
import {
  listPeminjaman,
  getPeminjamanbyId,
  tambahPeminjaman,
  updatePeminjaman,
  deletePeminjaman,
  jumlahPinjam,
} from "../controllers/Peminjaman.js";
import { admin, verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/peminjaman", verifyUser, listPeminjaman);
router.get("/peminjaman/:id", verifyUser, getPeminjamanbyId);
router.post("/pinjambarang", verifyUser, tambahPeminjaman);
router.patch("/editpeminjaman/:id", verifyUser, admin, updatePeminjaman);
router.delete("/deletepeminjaman/:id", verifyUser, admin, deletePeminjaman);
router.get("/jumlahpinjam", verifyUser, jumlahPinjam);
export default router;
