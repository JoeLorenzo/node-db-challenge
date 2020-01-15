const db = require('../data/db.js');

function get() {
  return db('tasks');
}

function getById(id) {
  return db('tasks').where({id});
}

function getTasksByProjectId(projectId) {
  return db('tasks').where('project_id', projectId)
}



function insert(projectId, task) {
  const taskObj = {'project_id':projectId, ...task}  
  return db('tasks')
      .insert(taskObj)
      .where('project_id', projectId)
      .then(([id]) => getById(id));
}
module.exports = {
  get,
  getTasksByProjectId,
  insert
};
