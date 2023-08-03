import express from "express";
import {
  listBarang,
  getBarangbyId,
  tambahBarang,
  updateBarang,
  deleteBarang,
  jumlahBarang,
  listBarangPinjam,
  updateStatusBarang
} from "../controllers/Barang.js";
import { verifyUser, admin } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/barang", verifyUser, listBarang);
router.get("/barangpinjam", verifyUser, listBarangPinjam);
router.get("/barang/:id", verifyUser, getBarangbyId);
router.post("/tambahbarang", verifyUser, admin, tambahBarang);
router.patch("/updatebarang/:id", verifyUser, admin, updateBarang);
router.delete("/deletebarang/:id", verifyUser, admin, deleteBarang);
router.get("/jumlahbarang", verifyUser, jumlahBarang);
router.patch("/updatestatusbarang/:id", verifyUser, updateStatusBarang);
export default router;
