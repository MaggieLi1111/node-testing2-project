
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {joke: "1", punchline: 'rowValue1'},
        {joke: "2", punchline: 'rowValue2'},
        {joke: "3", punchline: 'rowValue3'}
      ]);
    });
};
