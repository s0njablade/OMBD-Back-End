const express = require('express')
const queries = require('./queries')
const bodyParser = require('body-parer')

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())

