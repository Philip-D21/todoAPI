const express = require("express");
const route = express.Router();


const {
    createTodo,
    getAllTodos,
   updateTodo,
    deleteTodo,
}
 = require("../controller/todo.js");

router.post("/todo", createTodo)
router.get("/:id", getAllTodos)
router.put("/:id", updateTodo)
router.delete("/:id", deleteTodo)



module.exports = router;