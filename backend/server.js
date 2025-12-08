const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require("./config/db")
const port = process.env.PORT || 5000
const {errorHandler} = require("./middleware/errorMiddleWare")

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/productos', require('./routes/productosRoutes.js'))

app.get("/", (req, res) => {
  res.send("Todo bien con el deploy automatico");
});

app.use(errorHandler)

app.listen(port, ()=> console.log(`Servidor iniciando en el puerto ${port}`))
