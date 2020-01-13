const db = require('../data/db.js');

function get() {
  return db('tasks');
}


module.exports = {
  get
};
