/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('forcebreaks',function(table){
    table.incremental('force_break_id');
    table
        .foreign('task_id')
        .references('task_id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    table.time('time');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
