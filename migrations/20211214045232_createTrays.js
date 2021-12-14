
exports.up = function(knex) {
    return knex.schema.createTable("trays", (table) => {
        table.increments().index();

        table.text("name").notNullable();

        table.text("cellData").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("trays");
};
