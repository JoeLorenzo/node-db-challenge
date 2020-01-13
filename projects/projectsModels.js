const db = require('../data/db.js');

function get() {
  return db('projects');
}


module.exports = {
  get
};
