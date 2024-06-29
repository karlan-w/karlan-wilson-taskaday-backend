const express = require('express');
const router = express.Router(); 
const knex = require('knex')(require('../knexfile'))

//Routes Needed
//Get tasks for a specific date
//Put to edit tasks 
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


router.get('/:date',(req,res)=>{
    const taskDay = req.params.date;
    knex.select('*').from('tasks').where('date',taskDay)
    .then((data)=>{
        // if(taskDay!== knex.select('date').from('tasks')){
        //     res.send('Incorrect Date added');
        // }
        return res.send(data)
    })
    .catch((err)=>{
        return res.status(500).send(err)
    });

    //Complete migration 
    //Compelte Seeds
    //Complete get statement
    //Continue through statements 
});


module.exports = router; 