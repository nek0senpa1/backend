
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('texts').del()
    .then(function () {
      // Inserts seed entries
      return knex('texts').insert([
        {id: 1, message: 'You can do it', from: 1 },
        {id: 2, message: 'You can REALLY do it', from: 2 },
        {id: 3, message: 'You can REALLY REALLY REALLY do it!!!', from: 1 },
      ]);
    });
};
