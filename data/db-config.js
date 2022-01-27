const knex = require("knex")

const config = require("../knexfile.js")

const db = process.env.NODE_ENV || "development"

module.exports = knex(config[db])