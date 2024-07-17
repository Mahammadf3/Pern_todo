const { Pool}=require("pg");

const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"Todo",
    password: "Shaik@5f3",
    port: 5432
});

module.exports=pool;