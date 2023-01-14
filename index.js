const express = require('express');
require('dotenv').config();

const {connection}=require('../userPanel/config/db');
const {user}=require("../userPanel/Router/user.route");
const app = express();
app.use(express.json());
app.use('/user',user);









app.listen(process.env.port,async(err)=>{
try{
await connection;
console.log("db connect suucessfully");
console.log(`server is listining ${process.env.port}`);
}catch(err){
    console.log("err from connect to db");
    console.log(err);
}
})



