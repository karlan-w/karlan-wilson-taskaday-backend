/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('focus_times',function(table){
    table.increments('focus_id').primary();
    table.uuid('task_id').notNullable();
    table.string('date').notNullable();
    table
        .foreign('date')
        .references('date')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    table.time('focus_time');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('focus_times');
};
