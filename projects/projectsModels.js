const db = require('../data/db.js');

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects').where('id', id).first();
}

module.exports = {
  get,
  getById
};
