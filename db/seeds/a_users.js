exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'Alice', password: '12345'}),
        knex('users').insert({id: 2, name: 'Bob', password: '12345'}),
        knex('users').insert({id: 3, name: 'Charlie', password: '12345'})
      ]);
    });
};
