
exports.up = function(knex, Promise) {
  return knex.schema.createTable('path', function (table) {
    table.increments();
    table.integer('map_id').references('map.id').unsigned();
    table.integer('location_id').references('location.id').unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('path');
};