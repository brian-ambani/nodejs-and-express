import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

//getting all users
router.get("/", (req, res) => {
  res.send(users);
});

//adding a user
router.post("/", (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  const userWithId = { ...user, id: userId };

  users.push(userWithId);

  res.send(`user with the name ${user.firstName} added to the database`);

  res.send("POST ROUTE REACHED");
});

//get a single user

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user with the id ${id} deleted from the db.`);
});

export default router;
