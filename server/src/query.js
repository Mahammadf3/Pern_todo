const addData=`insert into todos(description) values($1);`;
const getAllTodo=`select * from todos`;
const putTodo=` update todos set description=$2 where id=$1`
const getTodoId=`select * from todos where id=$1`
const deleteTodoId=`delete from todos where id=$1`

module.exports={addData,getAllTodo,putTodo,getTodoId,deleteTodoId}