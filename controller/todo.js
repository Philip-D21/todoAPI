const Todo = require("../model/todoModel");
// const  CustomError = require("../errors");
// const { StatusCodes } = require("http-status-codes")



const createTodo = async(req,res) =>{
    let todo = await Todo.create({
        _id: req.body._id,
        title: req.body.title,
        description:req.body.description,
    })

    res.status(StatusCodes.CREATED).json({ message: "Todo Created "})
} 

const getAllTodos = async(req,res)=>{
    // const todo = req.body;
    // console.log(req.body);
    const todos = await Todo.find({})
     res.json({message: "All Todo task" })
}

const updateTodo = async(req,res)=> {
        const { id } = req.params;
        
        const todo = await Todo.findOneAndUpdate({ _id: todoId})
        if(!todo){
           throw new CustomError.NotFoundError(`No setting with id: ${todoId}`)
        }
        res.json({message: "Updated successfully"})
}

const deleteTodo = async (req,res)=>{
    const {id} = req.params
const todo = await Todo.findById(id);

await todo.remove();

return res.json({message: "Todo successfully deleted "})

}



module.exports = {
    createTodo,
    getAllTodos,
    updateTodo,
    deleteTodo,
}