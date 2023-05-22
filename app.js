const express = require('express')

const app = express()
const port = 8000

// Routes
const newsRoute = require('./routes/news.js')
app.use(newsRoute)

app.listen(port, () => console.log(`Server: http://localhost:${port}`))