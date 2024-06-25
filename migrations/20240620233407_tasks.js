/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tasks',function(table){
        table.uuid('task_id').primary().notNullable();
        table.string('name').notNullable();
        table.string('date').notNullable();
        table.integer('session_total',24).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
