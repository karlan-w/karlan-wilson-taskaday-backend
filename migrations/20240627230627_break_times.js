/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('break_times',function(table){
        table.increments('break_id').primary();
        table.uuid('task_id').notNullable();
        table.string('date').notNullable();
        table
            .foreign('date')
            .references('date')
            .inTable('tasks')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.time('break_time');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('break_times');
};
