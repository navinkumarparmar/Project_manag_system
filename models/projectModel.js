const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
    
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    description:{
        type:String,
     required:true

    } 
},
 {timestamps: true}
)

const Project = mongoose.model('Project',projectModel)
module.exports = Project;