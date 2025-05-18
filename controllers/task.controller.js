const task=require('../models/taskmodel.js');


//inserting records in the collection
const addtask = async (req,res)=>{
  try{
    const task_save=await task.create(req.body);
    res.status(200).json({
      status: true,
      message: 'Task Recorded Successfully!'
    })
  }
  catch(error){
    res.status(500).json(console.error(error.message));
  }
}

//find all data in database to retrieve
const findtask = async (req,res)=>{
  try{
    const task_receive=await task.find();
    res.status(200).json(task_receive);
  }
  catch(error){
    res.status(500).json(console.error(error.message));
  }
}

//find data by id
const findtaskbyid = async (req,res)=>{
   try{
    const {id} = req.params;
     const task_receive = await task.findById(id);
     res.status(200).json(task_receive);
   }
   catch(error){
    res.status(500).json({message:error.message})
   }
}

//update data in the database
const updatetask = async (req,res)=>{
  try{
    const {description, time} = req.body;
    const task_update = await task.findByIdAndUpdate(req.params.id,{ description, time });

   if(!task_update){
      return res.status(404).json({message:'task not found '});
   }

    res.status(200).json(task_update);
  }
  catch(error){
   res.status(500).json({message:error,message})
  }
}

//delete task in the database
const deletetask = async (req,res)=>{
   try{
     const {id} = req.params;

     const task_delete = await task.findByIdAndDelete(id);

     if(!task_delete){
          return res.status(404).json({message:'task not found'})
     }

     res.status(200).json(task_delete);
   }
   catch(error){
    res.status(500).json({message:error.message});
   }
};
module.exports = {
    addtask,
    findtask,
    findtaskbyid,
    updatetask,
    deletetask
}