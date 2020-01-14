const db = require('../data/db.js');

function get() {
  return db('tasks');
}

function getTasksByProjectId(projectId) {
  return db('tasks').where('project_id', projectId)
}


module.exports = {
  get,
  getTasksByProjectId
};
