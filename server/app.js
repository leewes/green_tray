const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");

const app = express();

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.use(express.json());

app.get("/api/seeds", async (req, res) => {
  try {
    const seeds = await db.select().table("seeds");
    res.status(200).json(seeds);
  } catch (err) {
    console.error("Error loading seeds!", err);
    res.sendStatus(500);
  }
});

app.get("/api/trays", async (req, res) => {
  try {
    const trays = await db.select().table("trays");
    res.status(200).json(trays);
  } catch (err) {
    console.error("Error loading trays!", err);
    res.sendStatus(500);
  }
});

app.post("/api/trays", async (req, res) => {
  try {
    const data = await db.insert(req.body).returning("*").into("trays");
    res.status(200).json(data);
  } catch (err) {
    console.error("Error posting tray!", err);
    res.sendStatus(500);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
