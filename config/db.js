const mongoose = require('mongoose');
require('dotenv').config();
async function connection(){
    try {
        // await mongoose.connect("mongodb+srv://chandBabu:chandnbj@atlascluster.czjefhf.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster");
        await mongoose.connect("MONOGO_URL= mongodb+srv://shafi:shafi@cluster0.yionwz0.mongodb.net/");
       console.log("Db Connected")
        
    } catch (error) {
        console.log("Db Conenction Failed")
        
    }
}

module.exports={connection};