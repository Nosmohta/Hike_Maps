
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('path', function(table){

      table.json('coord').unsigned();
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.table('path', (table) => {
    table.dropColumn("coord");
  });
};
