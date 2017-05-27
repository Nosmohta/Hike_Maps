
exports.up = function(knex, Promise) {
  return knex.schema.createTable('map', function (table) {
    table.increments();
    table.string('title', 50);
    table.text('description');
    table.integer('travel_time', 50);
    table.json('path');
    table.integer('user_id', 50).unsigned().index().references('id').inTable('users').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('map');
};