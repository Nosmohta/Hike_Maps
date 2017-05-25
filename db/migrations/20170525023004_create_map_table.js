exports.up = function(knex, Promise) {
  return knex.schema.createTable('map', function (table) {
    table.increments();
    table.string('title', 50);
    table.string('desc');
    table.integer('travel_time', 50);
    table.integer('user_id', 50).references('users.id').unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('map');
};