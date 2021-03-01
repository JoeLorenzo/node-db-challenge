const db = require('../data/db.js');

function get() {
  return db('resources');
}

function getById(id) {
  return db('resources').where({id}).first();
}
function insert(resource) {
  return db('resources')
    .insert(resource)
    .then(([id]) => getById(id));
}


module.exports = {
  get,
  getById,
  insert
};
