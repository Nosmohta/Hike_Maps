
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function(table){

      table.string('password').unsigned();
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn("password");
  });
};