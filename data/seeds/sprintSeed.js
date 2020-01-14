
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(() => knex('resources').truncate())
    .then(() => knex('projects').truncate())
    .then(() => {
      // projects table seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Build Week I', project_description: 'UI marketing webpage'},
        {id: 2, project_name: 'Build Week II', project_description: 'React I single page application'},
        {id: 3, project_name: 'Build Week III', project_description: 'React II auth and state managment'},
        {id: 4, project_name: 'Build Week IV', project_description: 'Node API'},
      ])
    })
    .then(() => {
        // resource seed entries
      return knex('resources').insert([
        {id: 1, resource_description: 'Preprocessors', resource_name: 'A CSS preprocessor'},
        {id: 2, resource_description: 'NPM', resource_name: 'A package bundler'},
        {id: 3, resource_description: 'React', resource_name: 'A frontend framework'},
        {id: 4, resource_description: 'UI library', resource_name: 'A UI library'},
        {id: 5, resource_description: 'Node', resource_name: 'A javascript runtime'},
        {id: 6, resource_description: 'Express', resource_name: 'A server library'}
      ]);
    })
    .then(() => {
      // task entries seeds
    return knex('tasks').insert([
      {id: 1, project_id:2, task_name: 'Dependencies', task_notes: 'npm install react, react-router-dom, and a ui library of your choice.'},
      {id: 2, project_id:2, task_name: 'Wireframe', task_notes: 'create a wireframe using figma or other ui scheme software.'},
      {id: 3, project_id:2, task_name: 'Github Setup', task_notes: 'settup git branches and permissions.'},
      {id: 4, project_id:2, task_name: 'Trello', task_notes: 'setup a trello board'},
      {id: 5, project_id:2, task_name: 'CRA', task_notes: 'create-react-app and structure directories.'},
      {id: 6, project_id:2, task_name: 'Pull Request', task_notes: 'create your first pull request.'},
      {id: 7, project_id:3, task_name: 'Express', task_notes: 'A server library.'},
      {id: 8, project_id:1, task_name: 'Wireframe', task_notes: 'create a wireframe using figma or other ui scheme software.'}
      ]);
    });
}
