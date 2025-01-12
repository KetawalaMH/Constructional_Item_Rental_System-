const mongoose = require("mongoose");
const schema = mongoose.Schema;

const itemSchema = new schema({
    name :{
        type : String,
        required : true
    },

    description : {
        type : String,
        required: false
    },

    dailyRate: {
        type : Number,
        required : true
    }


})

const Item = mongoose.model("Item",itemSchema);
module.exports = Item;

