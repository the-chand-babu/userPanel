const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {notes} = require('./Router/user.route')
const {connection}=require('../userPanel/config/db');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/notes',notes )

app.listen(process.env.port,async(err)=>{
try{
await connection();
console.log(`server is listining ${3000}`);
}catch(err){
    console.log("err from connect to db");
    console.log(err);
}
})



