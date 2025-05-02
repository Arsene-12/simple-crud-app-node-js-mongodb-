const mongoose=require('mongoose');

const taskschema = mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    time:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('taskmodel',taskschema);