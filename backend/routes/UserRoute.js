import express from "express";
import {
  ListUser,
  getUserbyId,
  tambahUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";
import { verifyUser, admin } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, admin, ListUser);
router.get("/users/:id", verifyUser, admin, getUserbyId);
router.post("/tambahuser", verifyUser, admin, tambahUser);
router.patch("/update/:id", verifyUser, admin, updateUser);
router.delete("/delete/:id", verifyUser, admin, deleteUser);

export default router;
