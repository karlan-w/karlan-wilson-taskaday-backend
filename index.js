const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');
const visualRoutes = require('./routes/visualRoutes');

//Routes Needed
//Get tasks for a specific date
//Post focus time 
//Post break time 
//Post forced break amount
//Put to edit tasks 
//Put to edit session total
//Delete Tasks 
app.use('/',taskRoutes);
 
//app.use('/visuals',visualRoutes);
// Get dates for the last 7 days, add up focus time. On server side, search for a particular day, send totals. Client side will determine the last 7 days. 
// Get dates for the last 7 days, add up break time. 


app.listen(process.env.PORT,()=>{
console.log(`Hi dude, Im listening on PORT${process.env.PORT}`);
});