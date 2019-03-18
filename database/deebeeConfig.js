const knex = require('knex');

const knexConfigy = require('../knexfile.js');

module.exports = knex(knexConfigy.development);
