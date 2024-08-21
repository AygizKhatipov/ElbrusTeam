const express = require('express')
const config = require('./config/configServer')
const app = express()
const apiRouter = require('./routes/api.routes')

const PORT = process.env.PORT ?? 3000


config(app)

app.use('/api', apiRouter)

app.listen(PORT, ()=> {
    console.log(`PORT:${3000}`)
})