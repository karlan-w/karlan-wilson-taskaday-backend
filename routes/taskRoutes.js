const express = require('express');
const router = express.Router(); 
const knex = require('knex')(require('../knexfile'))

//Routes Needed
//Put to edit task name 
//Delete Tasks 
//Post focus time 
//Post break time 
//Post forced break
//Get total break time for 7 days (Pull current day, calculate last 7 days, send totals for each)
//Get total focus time for 7 days
//-------------------------
//Put to edit session total -- might move to front end
//Update session count (get session amount for task once task is complete) --> Can be done on front end 
//Update number of sessions (post sessions total)--> Can be done on front end

//Get all task information for a specific date 
router.get('/:date',(req,res)=>{
    const taskDay = req.params.date;

    knex.select('*')
    .from('tasks')
    .where('date',taskDay)
    .then((data)=>{
    //Does the date exist? 
        if(data.length === 0){
            res.status(404).send('Date not found.');
        }
    //Return array of dates if date exists
        return res.json(data);
    })
    .catch((err)=>{
        return res.status(500).send(err)
    });
});

// Edit task name for a specific task
router.put('/task/:taskId',(req,res)=>{
    const taskId = req.params.taskId;
    console.log(taskId);
    const updatedInfo = req.body;
    knex('tasks')
    .where('task_id',taskId)
    .update(updatedInfo)
    .then(()=>{
       return knex.select('*').from('tasks').where('task_id',taskId);
    }).then((data)=>{
       return res.status(200).json(data);
    }).catch((err)=>{
        res.status(500).send(err);
    })
});

//Delete Tasks 

// Post a Task (need to add a if statement if task does not exist) + Add validation for task name (no symbols)


//Post focus time 

//Post break time 

//Post forced break


//Get total break time for 7 days (Pull current day, calculate last 7 days, send totals for each)


//Get total focus time for 7 days

module.exports = router; 