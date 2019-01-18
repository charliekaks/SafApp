const express = require('express')
const bars = require('handlebars')

const app = express()
const port = 5000;

app.get("/", (req,res)=>{
    res.send("Hey there!!!")
})

app.listen(port, ()=>{
    console.log("App is running")
})
