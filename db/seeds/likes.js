
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('likes').insert({id: 1, map_id: 1, user_id: 1}),
        knex('likes').insert({id: 2, map_id: 2, user_id: 1}),
        knex('likes').insert({id: 3, map_id: 3, user_id: 1}),
        knex('likes').insert({id: 4, map_id: 3, user_id: 3})

      ]);
    });
};
