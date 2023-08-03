import express from "express";
import {
  listJenis,
  getJenisbyId,
  tambahJenis,
  updateJenis,
  deleteJenis,
  jumlahJenis,
} from "../controllers/Jenis.js";
import { admin, verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/jenis", verifyUser, admin, listJenis);
router.get("/getjenis/:id", verifyUser, admin, getJenisbyId);
router.post("/tambahjenis", verifyUser, admin, tambahJenis);
router.patch("/editjenis/:id", verifyUser, admin, updateJenis);
router.delete("/deletejenis/:id", verifyUser, admin, deleteJenis);
router.get("/jumlahjenis", verifyUser, jumlahJenis);
export default router;
