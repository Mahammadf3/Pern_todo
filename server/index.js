const express=require("express");
const cors=require("cors");
const router=require("./src/routers")

const app=express();
app.use(express.json());
app.use(cors());

app.use("/",router)

app.listen(3001,()=>console.log("Server is running at  port 3001"))