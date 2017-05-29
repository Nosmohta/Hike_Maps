
exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', function (table) {
    table.increments();
    table.integer('map_id', 50).notNullable().unsigned().index().references('id').inTable('users').onDelete('cascade');
    table.integer('user_id', 50).notNullable().unsigned().index().references('id').inTable('users').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes');
};