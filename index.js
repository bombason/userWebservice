const express = require("express");
const morgan = require("morgan");
const users = require("./data/users");
const port = process.env.PORT || 5000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Iddrisu Aminu api For all users");
});

app.get("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({
    messege: "user has bien created",
    data: user,
  });
});

app.post("/user", (req, res) => {
  const { fname, lname, dob, school } = req.body;
  const user = { fname, lname, dob, school };
  users.push(user);

  res.status(202).json({
    status: "success",
    data: user,
  });
});

app.listen(port, () => console.log("server is running on port 5000 ${port}"));
