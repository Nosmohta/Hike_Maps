
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('path').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('path').insert({id: 1, coord: JSON.stringify({ 'type': 'LineString', "coordinates": [[51.056484, -114.094765], [51.055533, -114.094744], [51.054609, -114.094733]] })}),
        knex('path').insert({id: 2, coord: JSON.stringify({ 'type': 'LineString', "coordinates": [[51.056484, -114.094765], [51.055533, -114.094744], [51.054609, -114.094733]] })}),
        knex('path').insert({id: 3, coord: JSON.stringify({ 'type': 'LineString', "coordinates": [[51.056484, -114.094765], [51.055533, -114.094744], [51.054609, -114.094733]] })})
      ]);
    });
};
