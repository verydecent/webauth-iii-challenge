const knex = require('knex');
const config = require('../knexfile');

console.log(config)

module.exports = knex(config.development);