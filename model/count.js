const mongoose = require('mongoose');


const AddCountSchema = mongoose.Schema({
    count:String  
})

const AddCountModel = mongoose.model('note',AddCountSchema);



module.exports={AddCountModel};