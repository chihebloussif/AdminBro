const mongoose = require ('mongoose');

const SellerSchema = new mongoose.Schema({
    name:{type:String , required:true, unique:true},
    adresse:{type:String , required:true},
    city:{type:String , required:true},
    desc:{type:String},

},
{timestamps:true}
);
    module.exports = mongoose.model("Sellers",SellerSchema);