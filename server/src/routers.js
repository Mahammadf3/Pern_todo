const {Router}=require("express");
const router=Router();
const { addDescription, getTodo,updateTodo,getTodoById,deleteTodo} = require("./controller");

router.post("/add", addDescription);
router.get("/display", getTodo);
router.put("/add/:id",updateTodo);
router.get("/add/:id",getTodoById);
router.delete("/add/:id",deleteTodo)
module.exports = router;
