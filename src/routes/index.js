const express =require('express')

const rutas=express.Router()

//Escribe tus rutas
rutas.use('/',require('./Principal.routes'))


module.exports=rutas