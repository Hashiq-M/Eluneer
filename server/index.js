const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const RegisterModel = require("./models/Register");
const authenticate = require("./middleware/jwtauthenticate");

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieparser());

mongoose.connect("mongodb://localhost:27017/test");

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  RegisterModel.findOne({ email })
    .then((user) => {
      if (user) {
        res.json("Already have an account");
      } else {
        RegisterModel.create({ name, email, password })
          .then((result) => res.json("Account created"))
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email })
    .then((user) => {
      if (user.password === password) {
        const token = jwt.sign({ id: user._id, name: user.name }, "xXxpkebj");
        res.cookie("Token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });
        return res.json({
          message: "Login successfull",
          status: "success",
          id: user._id,
          name: user.name,
        });
      } else {
        res.json({ message: "Invalid User", status: "failed" });
      }
    })
    .catch((err) => console.log(err));
});

app.get("/fetchprofile", authenticate, (req, res) => {
  const userid = req.user.id;
  const username = req.user.name;
  return res.json({ userid, username, status: "success" });
});

app.listen(3001, () => {
  console.log("server is running");
});
