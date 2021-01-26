const express =require('express')
const app=express.Router()

app.get('/',(req,res)=>{
    res.status(200).json({data:'succes'})
});


module.exports=app