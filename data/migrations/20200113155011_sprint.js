
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('description', 255);
      tbl.integer('completed').notNullable().defaultTo(0);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.string('description', 255);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('notes', 255);
        tbl.integer('completed').notNullable().defaultTo(0);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
