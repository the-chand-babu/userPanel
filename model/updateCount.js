const mongoose = require('mongoose');


const updateCount = mongoose.Schema({
    count:String  
})

const updateCountModel = mongoose.model('note',updateCount);



module.exports={updateCountModel};