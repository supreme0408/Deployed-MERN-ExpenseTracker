require('dotenv').config();
const USERNAME =process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const mongoose = require('mongoose');
const connection = "mongodb+srv://"+USERNAME+":"+PASSWORD+"@cluster0.febxzwi.mongodb.net/expense-et?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));