import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

let users = [];

//getting all users
router.get("/", getUsers);

//adding a user
router.post("/", createUser);

//get a single user

router.get("/:id", getUser);

router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
