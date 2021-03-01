const db = require('../data/db.js');

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects').where({id}).first();
}

function insert(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => getById(id));
}


module.exports = {
  get,
  getById,
  insert
};
