const express = require('express');
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const Router = require('./routes');
require('./src/database/index');

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))


app.use(Router)

app.listen(3001, ()=>{console.log('Logado com sucesso!')})