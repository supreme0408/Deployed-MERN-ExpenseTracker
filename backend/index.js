const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database');
// -----
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3001","https://deployed-mern-expense-tracker-server.vercel.app/"], // Allow requests from this origin
    methods: ["POST","GET"],
    credentials: true, // Enable sending cookies from the client
  })
);
// -----
// API
const users = require('./api/users');
const auth = require('./api/auth');
const transaction = require('./api/transactions');
const splitwise = require('./api/splitwise');
app.use('/api/auth',auth);
app.use('/api/users', users);
app.use('/api/transac',transaction);
app.use('/api/splitwise',splitwise);

app.get("/",(req,res)=>{
  res.json("Welcome to Expense Tracker!!")
})

// -----
const port = 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});