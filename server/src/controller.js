const pool=require("./db");
const {addData,getAllTodo,putTodo,getTodoId,deleteTodoId}=require("./query")

const addDescription = async (req, res) => {
    try {
        const { description } = req.body;
        const result = await pool.query(addData, [description]);
        res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
}


const getTodo = async (req, res) => {
    try {
        const result = await pool.query(getAllTodo);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).send("Internal Server Error");
    }
};

const updateTodo=async(req,res)=>{
    const {id}=req.params;
    const { description } = req.body;
    pool.query(putTodo,[id,description],(error,result)=>{
        try {
            if(error){
                throw error
            }else{
                res.status(201).json({msg:"updated successfully"})
            }
        } catch (error) {
            console.log(error)
        }
    })
}

const getTodoById=async(req,res)=>{
    const {id}=req.params;
  
    pool.query(getTodoId,[id,],(error,result)=>{
        try {
            if(error){
                throw error
            }else{
                res.status(200).json(result.rows)
            }
        } catch (error) {
            console.log(error)
        }
    })
}

const deleteTodo=async(req,res)=>{
    const {id}=req.params;
  
    pool.query(deleteTodoId,[id,],(error,result)=>{
        try {
            if(error){
                throw error
            }else{
                res.status(200).json({msg:"deleted Successfully"})
            }
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports={addDescription,getTodo,updateTodo,getTodoById,deleteTodo}