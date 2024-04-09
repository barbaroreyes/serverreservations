import express from "express";
import mongoose from "mongoose";
import  cors from  "cors";
const app = express();
const PORT = 4500;


const users =[{"name": 'John', "email": 'japsjap@gmail.com'}]

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
    res.send(users)
})

app.listen(PORT , ()=>{
    console.log(`listening on port:${PORT}`)
});