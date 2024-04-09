const express = require('express') 
const mongoose = require('mongoose') 
const cors = require('cors')
const app = express();
const PORT = 4500;
require("dotenv").config()





const users =[{"name": 'John', "email": 'japsjap@gmail.com'}]


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("hello")
})

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
    res.send(users)
})

app.listen(PORT , ()=>{
    console.log(`listening on port:${PORT}`)
});