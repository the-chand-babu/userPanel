
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')

const {NotesModel}= require('../model/note');
const notes = express.Router();

notes.get('/', async(req,res)=>{
    try{
        const notes = await NotesModel.find();
        res.send("Hello ");
    }
    catch(err){
        console.log("err from user routs get request");
        console.log(err);
    }
})
    


notes.post('/create',async(req,res)=>{
    try{
        const payload = req.body;
        console.log(payload);
        const result = await NotesModel.deleteMany();
        const new_notes = new NotesModel(payload);
        await new_notes.save();
        res.send({"msg":"created succesfully"});
    }catch(err){
        console.log("err from user router create req");
        console.log(err);
    }
})
    
notes.patch('/update/:noteID',async(req,res)=>{
    try{
        const {noteID}=req.params;
        const {userID}=req.body;
        const payload = req.body;
        const note= await NotesModel.findOneAndUpdate({_id:noteID,userID},payload);
        if(note){
            res.send({"msg":"succesfully update"});
        }else{
            res.send({"msg":"not authorised to updated"});
        }
    }catch(err){
        console.log("err from user routes update requ");
        console.log(err);
    }
})


notes.delete('/delete/:noteID',async(req,res)=>{
    try{
        const {noteID}= req.params;
        const {userID}=req.body;
        if(noteID){
            const note = await NotesModel.findOneAndDelete({_id:noteID,userID});
            if(note){
                res.send({"msg":"succesfully deleted"})
            }else{
            res.send({"msg":"try after some time"});
            }
        }else{
           res.send ({"msg":"enter notes id"});
        }
    }catch(err){
        console.log("err from user router of deleted request");
        console.log(err);
    }
})




module.exports={notes}