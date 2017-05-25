

exports.up = function(knex, Promise) {
  return knex.schema.table('map', function (table) {
    table.dropColumn('desc');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.table('map', (table) => {
    table.dropColumn('description');
    table.string('desc');
  });
};
