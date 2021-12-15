const data = {
  1: {
    1: {
      name: "Spinach",
      color: "blue",
    },
    2: {
      name: "Spinach",
      color: "blue",
    },
    3: {
      name: "Spinach",
      color: "blue",
    },
    4: {
      name: "Spinach",
      color: "blue",
    },
    5: {
      name: "Spinach",
      color: "blue",
    },
    6: {
      name: "Spinach",
      color: "blue",
    },
    7: {
      name: "Spinach",
      color: "blue",
    },
    8: {
      name: "Spinach",
      color: "blue",
    },
  },
  2: {
    1: {
      name: "Spinach",
      color: "blue",
    },
    2: {
      name: "Spinach",
      color: "blue",
    },
    3: {
      name: "Spinach",
      color: "blue",
    },
    4: {
      name: "Spinach",
      color: "blue",
    },
    5: {
      name: "Spinach",
      color: "blue",
    },
    6: {
      name: "Spinach",
      color: "blue",
    },
    7: {
      name: "Spinach",
      color: "blue",
    },
    8: {
      name: "Spinach",
      color: "blue",
    },
  },
  3: {
    1: {
      name: "Spinach",
      color: "blue",
    },
    2: {
      name: "Spinach",
      color: "blue",
    },
    3: {
      name: "Spinach",
      color: "blue",
    },
    4: {
      name: "Spinach",
      color: "blue",
    },
    5: {
      name: "Spinach",
      color: "blue",
    },
    6: {
      name: "Spinach",
      color: "blue",
    },
    7: {
      name: "Spinach",
      color: "blue",
    },
    8: {
      name: "Spinach",
      color: "blue",
    },
  },
  4: {
    1: {
      name: "Spinach",
      color: "blue",
    },
    2: {
      name: "Spinach",
      color: "blue",
    },
    3: {
      name: "Spinach",
      color: "blue",
    },
    4: {
      name: "Spinach",
      color: "blue",
    },
    5: {
      name: "Spinach",
      color: "blue",
    },
    6: {
      name: "Spinach",
      color: "blue",
    },
    7: {
      name: "Spinach",
      color: "blue",
    },
    8: {
      name: "Spinach",
      color: "blue",
    },
  },
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("trays")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("trays").insert([
        { name: "MyFirstTray", cellData: JSON.stringify(data) },
      ]);
    });
};
