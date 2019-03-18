
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Harry', password: 'Potter', phone: 1235558091},
        {id: 2, username: 'Star', password: 'Wars', phone: 8009991234},
        
      ]);
    });
};
