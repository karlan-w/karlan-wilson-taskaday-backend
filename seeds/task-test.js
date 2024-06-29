const tasksData = require('../seed-data/seed_tasks');
const focusTimesData = require('../seed-data/seed_focus_times');
const breakTimesData = require('../seed-data/seed_break_times');
const forceBreaksData = require('../seed-data/seed_force_breaks');

exports.seed = async function(knex) {
  await knex('tasks').del();
  await knex('focus_times').del();
  await knex('break_times').del();
  await knex('force_breaks').del();
  await knex('tasks').insert(tasksData);
  await knex('focus_times').insert(focusTimesData);
  await knex('break_times').insert(breakTimesData);
  await knex('force_breaks').insert(forceBreaksData);
};
