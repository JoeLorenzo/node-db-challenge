const db = require('../data/db.js');

function get() {
  return db('resources');
}


module.exports = {
  get
};
