
exports.up = function(knex, Promise) {
  return knex.schema.table('location', function (table) {
    table.float('lat');
    table.float('long');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.table('location', (table) => {
    table.dropColumn('lat');
    table.dropColumn('long');
  });};