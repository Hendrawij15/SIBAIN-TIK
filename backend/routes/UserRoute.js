import express from "express";
import {
  ListUser,
  getUserbyId,
  tambahUser,
  updateUser,
  deleteUser,
  jumlahUser,
} from "../controllers/Users.js";
import { verifyUser, admin } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, ListUser);
router.get("/getusers/:id", verifyUser, getUserbyId);
router.post("/tambahuser", verifyUser, admin, tambahUser);
router.patch("/updateuser/:id", verifyUser, admin, updateUser);
router.delete("/delete/:id", verifyUser, admin, deleteUser);
router.get("/countUser", verifyUser, jumlahUser);

export default router;
