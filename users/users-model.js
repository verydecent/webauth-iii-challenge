const Database = require('../database/dbConfig');

module.exports = {
  get,
  add,
  // find,
  findBy
};

function get() {
  return Database('users');
}

function add(user) {
  return Database('users').insert(user);
}

function findBy(id) {
  console.log(id);
  return Database('users').where({ username: id }).first();
}