
exports.up = function(knex) {
    return knex.schema.createTable('opcoes', function (table){
        table.increments();

        table.string('valor').notNullable();
        table.string('descricao').notNullable();
        
        table.string('titulo_id').notNullable();

        table.foreign('titulo_id').references('titulo_id').inTable('titulos');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('opcoes');
};
