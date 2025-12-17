import todoCollections from "../Model/todoModel.js";

export const addTodo = async(req,res) =>{
    try{
        const data=new todoCollections(req.body);
        await data.save()
        res.status(201).json({mess:"data has been stored"})
    }
    catch(err){
        res.status(400).json({message:err})
    }
}

export const getTodo = async(req,res) =>{
    try{
        const data =await todoCollections.find();
        res.json(data)
    }
    catch(err){
        res.status(500).json({message:err})
    }
}

export const updateTodo =async(req,res) =>{
    try{
        const data= await todoCollections.findByIdAndUpadte(req.params.id,req.body,{new:true})
        res.json(data)
    }
    catch(err){
        res.status(400).json({message:err})
    }
}

export const deleteTodo =async(req,res) =>{
    try{
        await todoCollections.findByIdAndDelete(req.params.id)
        res.json({message:"todo has been deleted"})
    }
    catch{
        res.status(500).json({message:err})
    }
}