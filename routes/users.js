import express from "express";

const router = express.Router();

const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firsName: "Jane", lastName: "Doe", age: 24 },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {});

export default router;
