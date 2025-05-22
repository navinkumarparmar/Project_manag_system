const Project = require('../models/projectModel');

module.exports.create = async function (req,res,next) {
     
    try {

        const projectData = req.body;
        
        const project = new Project(projectData);

        await project.save();
        return res.status(201).json({
            message: "succesfully created Project",
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

       const projects = await Project.find({}).select('_id name price description')
        return res.status(201).json({
            message: "succesfully get Projects",
            data:projects
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

      const isproject = await Project.findById(id);
      if(!isproject){
        return res.status(404).json({
            message: "Project Not found"
        })
    }
       const project = await Project.findByIdAndUpdate(id,updatedata,{new:true})

       
        return res.status(201).json({
            message: "succesfully update Project",
            data:project
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
          const isproject = await Project.findById(id);
      if(!isproject){
        return res.status(404).json({
            message: "Project Not found"
        })
    }

       const project = await Project.findByIdAndDelete(id)

       
        return res.status(201).json({
            message: "succesfully delete Project",
            
        })
    
        
    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
        
    }

    
}