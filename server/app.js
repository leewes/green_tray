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

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/seeds", async (req, res) => {
  const seeds = await db.select().table("seeds");
  const names = seeds.map(seed => seed.name);
  res.status(200).json(names);
});

module.exports = app;
