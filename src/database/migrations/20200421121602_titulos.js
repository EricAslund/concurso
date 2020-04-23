
exports.up = function(knex) {
    return knex.schema.createTable('titulos', function(table){
        table.increments('id');

        table.string('titulo').notNullable();

        table.string('correcoes_id').notNullable();

        table.foreign('correcoes_id').references('id').inTable('correcoes');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('titulos');
};
