import express from "express";
import mongoose from "mongoose";
import  cors from  "cors";
const app = express();
const PORT = 4500;


app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
    res.send("Hello World from server on api route")
})

app.listen(PORT , ()=>{
    console.log(`listening on port:${PORT}`)
});