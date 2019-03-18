

exports.up = function(knex) {
    return knex.schema.createTable('texts', texto => {
        texto.increments();
  
        texto.string('message', 255).notNullable();
        texto.integer('from').unsigned();

        texto.foreign('from').references('users.id')
      
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('texts');
  };
  