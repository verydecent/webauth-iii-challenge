const Database = require('../database/dbConfig');

module.exports = {
  add,
  // find,
  // findBy
};

function add(user) {
  return Database('users').insert(user);
}