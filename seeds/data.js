exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("seeds")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("seeds").insert([
        { name: "Cabbage" },
        { name: "Broccoli" },
        { name: "Spinach" },
        { name: "Tomato" },
      ]);
    });
};
