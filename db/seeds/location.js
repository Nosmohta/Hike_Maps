
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('location').insert({id: 1, lat: '51.056484', long: '-114.094765'}),
        knex('location').insert({id: 2, lat: '51.055533', long: '-114.094744'}),
        knex('location').insert({id: 3, lat: '51.054609', long: '-114.094733'})
      ]);
    });
};
