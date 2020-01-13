
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Build Week I', project_description: 'UI marketing webpage'},
        {id: 2, project_name: 'Build Week II', project_description: 'React I single page application'},
        {id: 3, project_name: 'Build Week III', project_description: 'React II auth and state managment'},
        {id: 4, project_name: 'Build Week IV', project_description: 'Node API'},
      ]);
    });
};
