const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// API Import
const contactAPI = require('./src/api/contactAPI.js')

// DB Connection
const connectDB = require('./connectDB.js')

const app = express()
const port = process.env.PORT

// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

app.set('view engine', 'ejs');

// Routes
app.use('/', contactAPI)

app.listen(port, () => {
    console.log(`Example app listening on http://127.0.0.1:${port}`)
})