
exports.up = function(knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments();
    t
      .string('username', 128)
      .notNullable()
      .unique();
    t
      .string('password', 128)
      .notNullable()
      .unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
