import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use("/api/users", usersRoutes);

app.get("/", (req, res) => res.send("Hello from Home page."));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
