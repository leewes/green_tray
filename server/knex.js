const knex = require("knex");

const db = knex({
    client: "pg",
    connection:
        process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PW}@127.0.0.1:5432/tray`,
        searchPath: "public",
});

module.exports = db;