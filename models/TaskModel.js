const mongoose = require('mongoose');

const taskModel = new mongoose.Schema({
    
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
    },
    project_id :{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }

},
 {timestamps: true}
)

const Task = mongoose.model('Task',taskModel)
module.exports = Task;