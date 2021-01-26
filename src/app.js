const express=require('express')
 const path = require('path');
 const app=express()
 process.env.PORT=process.env.PORT || 5000
 app.use(express.static(path.resolve(__dirname,'./public')))
 app.get('/',(req,res)=>{
 res.status(200).json({mensaje:'ok'})
 });
 app.listen(process.env.PORT,(err)=>{
 let mensaje=`Ocurrio un error iniciando Servidor en el puerto :${process.env.PORT} :: error: err`
 if(!err) {
 mensaje=`Servidor Corriendo en el puerto :${process.env.PORT}`
 }
 console.log(mensaje);
 })
 