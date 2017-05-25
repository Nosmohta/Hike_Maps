exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', function (table) {
    table.increments();
    table.string('lat');
    table.string('long');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('location');
};