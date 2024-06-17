const mongoose = require("mongoose");
const Item = require('./Items'); 
const schema = mongoose.Schema;

const orderSchema = new schema({
    recieverName :{
        type : String,
        required : true
    },

    recieveAddress : {
        type : String,
        require : true
    },

    itemId : {
        type : String,
        required: true
    },

    startDate: {
        type : Date,
        required : true
    },

    endDate: {
        type : Date,
        require : true
    },

    price : {
        type: Number,
        require: false
    }


})




const Order = mongoose.model("Order",orderSchema);
module.exports = Order;

