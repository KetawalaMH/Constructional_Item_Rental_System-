const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8050;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("mongodb Connection success");
})





const itemRouter = require("./Routes/items.js");
app.use("/item",itemRouter);

const userRouter = require("./Routes/users.js");
app.use("/user", userRouter);

const orderRouter = require("./Routes/orders.js");
app.use("/order", orderRouter);

app.listen(PORT, ()=>{
    console.log('Server is up and running on port no 8050')
})