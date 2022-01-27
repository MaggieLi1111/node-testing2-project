const knexCleaner = require("knex-cleaner")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knexCleaner.clean(knex, {
    ignoreTables: ["knex_migrations", "knex_migrations_lock"],
    mode: "truncate",
  });
};
