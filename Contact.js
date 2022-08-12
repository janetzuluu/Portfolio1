const mongoose=require('mongoose');
var contactSchema=new mongoose.Schema({
    first:{
        type:String
    },
    last:{
        type:String
    },
    email:{
        type:String
    },
    reason:{
        type:String
    },
    comments:{
        type:String
    }
});
module.exports=mongoose.model('contact',contactSchema);
