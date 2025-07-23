const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const bodyparser =require('body-parser');

//database connection Import
const connectDB = require('./models/db')
app.use(bodyparser.json());
app.use(bodyparser.json(bodyparser.urlencoded({extended:true})))

//routes import
const routes = require('./routes/index');



app.use('/api',routes);
app.use('/',(req,res,next)=>{
    res.send('server is running')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})