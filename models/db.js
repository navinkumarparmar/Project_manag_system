const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.dburl)
        console.log("database is connected")
    } catch (error) {
        console.log("error while connecting database",error)
    }

} 

connectDB();
module.exports = connectDB