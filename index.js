const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use(cors());

//Routes Needed
//Get tasks for a specific date 
//Post focus time 
//Post break time 
//Post forced break amount
//Put to edit tasks 
//Put to edit session total
//Delete Tasks 
// Get dates for the last 7 days, add up focus time. On server side, search for a particular day, send totals. Client side will determine the last 7 days. 
// Get dates for the last 7 days, add up break time. 

//Next steps 
    //Date is the foreign key 
    //


app.listen(process.env.PORT,()=>{
console.log('Hi, Im listening on PORT 8080' );
});