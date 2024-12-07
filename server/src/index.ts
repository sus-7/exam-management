import express from "express";
import * as dotenv from "dotenv";
import ConnectDB from "./utils/db";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000

//middlewares
app.use(express.json());
ConnectDB();

app.get('/', (req,res)=>{
    res.send("Server is running!");
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})