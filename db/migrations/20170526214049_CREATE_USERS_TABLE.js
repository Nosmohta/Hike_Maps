
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name', 50);
    table.string('password', 50);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
