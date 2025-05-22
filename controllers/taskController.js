const Project = require('../models/projectModel');
const Task = require('../models/TaskModel')

module.exports.create = async function (req,res,next) {
     
    try {

        const TaskData = req.body;
        
        const task = new Task(TaskData);

        await task.save();
        return res.status(201).json({
            message: "succesfully created task",
        })
    
        
    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
        
    }

    
}


module.exports.listAll = async function (req,res,next) {
     
    try {
      
       const tasks = await Task.find({}).select('_id name price description').skip(skip).limit(limit)
        return res.status(201).json({
            message: "succesfully get tasks",
            data:tasks
        })
    
        
    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
        
    }

}

module.exports.update = async function (req,res,next) {
     
    try {
        const updatedata = req.body;
        const id = req.params.id

          const isproject = await Task.findById(id);
              if(!isproject){
                return res.status(404).json({
                    message: "Task Not found"
                })
            }

       const task = await Task.findByIdAndUpdate(id,updatedata,{new:true})

       
        return res.status(201).json({
            message: "succesfully update Task",
            data:task
        })
    
        
    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
        
    }

    
}


module.exports.delete = async function (req,res,next) {
     
    try {
       
        const id = req.params.id
          const isproject = await Task.findById(id);
              if(!isproject){
                return res.status(404).json({
                    message: "Task Not found"
                })
            }

       const task = await Task.findByIdAndDelete(id)

       
        return res.status(201).json({
            message: "succesfully delete Task",
            
        })
    
        
    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
        
    }

    
}