
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('seeds').del()
    .then(function () {
      // Inserts seed entries
      return knex('seeds').insert([
        {id: 1, name: 'Cabbage'},
        {id: 2, name: 'Broccoli'},
        {id: 3, name: 'Spinach'},
        {id: 4, name: "Tomato"}
      ]);
    });
};
