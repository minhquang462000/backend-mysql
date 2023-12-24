const bodyParser = require("body-parser");
const express = require("express");
const fs = require("node:fs");
const path = require("node:path");
const app = express();
const isCheckActive = require("./middleware/isCheckActive");
const isCheckExits =require("./middleware/isCheckExit")
// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
app.get("/api/v1/product",isCheckExits, (req, res) => {
  // res.status(200)
  // res.send("Đây là product")
  res.status(200).json({
    massage: "ok",
    data: [
      {
        id: 1,
        name: "product 1",
        price: 100,
      },
    ],
  });
});

// bai3
// get all users
app.get("/api/v1/users", (req, res) => {
  const pathUser = path.join(__dirname, "../data/users.json");
  const dataUser = fs.readFileSync(pathUser, "utf-8");
  res.status(200).json(JSON.parse(dataUser));
});
// get by ID
app.get("/api/v1/users/:id", (req, res) => {
  const userID = req.params.id;
  // doc data
  const pathUser = path.join(__dirname, "../data/users.json");
  const dataUser = fs.readFileSync(pathUser, "utf-8");
  const listUser = JSON.parse(dataUser);
  const userById = listUser.find((user) => user._id === userID);
  if (userById) {
    res.status(200).json(userById);
  } else {
    res.status(400).json({
      massage: "khồng có cái mày muốn ",
    });
  }
});
// tao moi user
app.post("/api/v1/users", (req, res) => {
  const dataUserCreate = req.body;
  const pathUser = path.join(__dirname, "../data/users.json");
  const dataUser = fs.readFileSync(pathUser, "utf-8");
  const listUser = JSON.parse(dataUser);
  const userByEmail = listUser.find(
    (user) => user.email === dataUserCreate.email
  );
  if (userByEmail) {
    res.status(400).json({
      massage: "email da ton tai",
    });
  } else {
    listUser.unshift(dataUserCreate);
    fs.writeFileSync(pathUser, JSON.stringify(listUser));
    res.status(200).send("tao thanh cong");
  }
});
// Edit user
app.patch("/api/v1/users/:id", (req, res) => {
  const userID = req.params.id;
  const userIdEdit = req.body;
  const pathUser = path.join(__dirname, "../data/users.json");
  const dataUser = fs.readFileSync(pathUser, "utf-8");
  const listUser = JSON.parse(dataUser);
  const userById = listUser.find((user) => user._id == userID);

  if (userById) {
    (userById.name = userIdEdit.name),
      (userById.email = userIdEdit.email),
      (userById.password = userIdEdit.password);
    // const newListUser = {...userById,
    //  name:userIdEdit.name,
    //  email:userIdEdit.email,
    //   password:userIdEdit.password}
    fs.writeFileSync(pathUser, JSON.stringify(listUser)),
      res.status(200).send("sua thanh cong");
  }
});
// delete user
app.delete("/api/v1/users/:id", (req, res) => {
  const userID = req.params.id;
  const pathUser = path.join(__dirname, "../data/users.json");
  const dataUser = fs.readFileSync(pathUser, "utf-8");
  const listUser = JSON.parse(dataUser);
  const newListUser = listUser.filter((user) => user._id !== userID);
  fs.writeFileSync(pathUser, JSON.stringify(newListUser));
  res.status(200).send("xoa thanh cong");
});

// Page not found
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});
// Chay server
const PORT = 4620;
app.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});
