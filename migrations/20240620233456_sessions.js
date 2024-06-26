/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('sessions',function(table){
    table.increments('session_id').primary();
    table.uuid('task_id').notNullable();
    table
        .foreign('task_id')
        .references('task_id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    table.string('date').notNullable();
    table
        .foreign('date')
        .references('date')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    table.time('focus_time');
    table.time('break_time');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('sessions');
};
