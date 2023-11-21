const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogRouter = require('./controllers/blog')
var a, b;
const middleware = require('./utils/middleware')

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blogs', blogRouter)

module.exports = app
