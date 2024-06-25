const tasksData = require('../seed-data/seed_tasks');
const sessionsData = require('../seed-data/seed_sessions');
const forceBreaksData = require('../seed-data/seed_force_breaks');

exports.seed = async function(knex) {
  await knex('tasks').del();
  await knex('sessions').del();
  await knex('forcebreaks').del()
  await knex('tasks').insert(tasksData);
  await knex('sessions').insert(sessionsData);
  await knex('forcebreaks').insert(forceBreaksData);
};
