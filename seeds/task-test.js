const tasksData = require('./seed_tasks');
const sessionsData = require('./seed_sessions');
const forceBreaksData = require('./seed_force_breaks');

exports.seed = async function(knex) {
  await knex('tasks').del();
  await knex('sessions').del();
  await knex('forcebreaks').del()
  await knex('tasks').insert(tasksData);
  await knex('sessions').insert(sessionsData);
  await knex('forcebreaks').insert(forceBreaksData);
};
