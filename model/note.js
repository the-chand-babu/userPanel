const mongoose = require('mongoose');


const noteSchema = mongoose.Schema({
    title:String,
    note:String,
    authore:String,
  
})

const NotesModel = mongoose.model('note',noteSchema);



module.exports={NotesModel};