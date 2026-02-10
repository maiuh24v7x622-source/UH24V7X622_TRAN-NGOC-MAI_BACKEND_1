const express = require("express");
const cors = require("cors");

console.log("APP JS LOADED");

const contactsRouter = require("./app/routes/contact.route");
console.log("Contacts router loaded");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);

module.exports = app;
