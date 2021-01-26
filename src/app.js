require('dotenv').config();
const express = require('express')
const path = require('path');
const app = express()
const rutas = require('./routes/index')
app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.json())
app.use('/', rutas)
module.exports=app