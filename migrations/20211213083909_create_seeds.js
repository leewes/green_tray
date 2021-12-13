
exports.up = function(knex) {
    return knex.schema.createTable("seeds", (table) => {
        table.increments().index();

        table.text("name").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("seeds");
};
