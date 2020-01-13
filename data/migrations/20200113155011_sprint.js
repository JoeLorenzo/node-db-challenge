
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 128).notNullable();
      tbl.string('project_description', 255);
      tbl.integer('completed').notNullable().defaultTo(0);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 255);
        tbl.string('resource_description', 255).notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_name', 128).notNullable();
        tbl.string('task_notes', 255);
        tbl.integer('completed').notNullable().defaultTo(0);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
