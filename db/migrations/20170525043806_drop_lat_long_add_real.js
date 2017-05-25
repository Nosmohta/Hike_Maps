
exports.up = function(knex, Promise) {
  return knex.schema.table('location', function (table) {
    table.dropColumn('lat');
    table.dropColumn('long');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.table('location', (table) => {
    table.string('lat');
    table.string('long');
  });};