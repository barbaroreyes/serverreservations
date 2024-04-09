import express from "express";
import mongoose from "mongoose";
import  cors from  "cors";
const app = express();
const PORT = 4500;


app.use(express.json())
app.use(cors())

app.listen(PORT , ()=>{
    console.log(`listening on port:${PORT}`)
});