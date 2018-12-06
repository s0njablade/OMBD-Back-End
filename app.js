const express = require('express')
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})
