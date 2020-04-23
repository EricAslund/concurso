
exports.up = function(knex) {
    return knex.schema.createTable('correcoes', function (table){
        table.increments('id');
        table.string('item').notNullable();
        table.string('referencia').notNullable();
        table.string('sequencial').notNullable();
        table.string('solicitacao').notNullable();
        table.string('situacao').notNullable();
        table.decimal('ordem').notNullable();
        

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('correcoes');
};
