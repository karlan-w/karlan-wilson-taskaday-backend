/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tasks',function(table){
        table.uuid('task_id').primary().unique().notNullable();
        table.string('name').notNullable();
        table.string('date').notNullable();
        table.index(['date'],'index_date');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
