const express=require('express')
const app=express()
app.get('/home',(req,res)=>{
    res.send("<h1>Welcome</h1>")
})
app.listen(1400)