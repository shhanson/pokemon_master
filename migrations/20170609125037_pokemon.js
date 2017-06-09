'use strict';
exports.up = function(knex) {
    return knex.schema.createTable('pokemon', (table) => {
        table.increments();
        table.integer('pokedex_id').notNullable();
        table.string('name', 50).notNullable();
        table.string('type', 50).notNullable();
        table.string('evolves_from', 50).notNullable();
        table.string('image_url');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pokemon');
};
