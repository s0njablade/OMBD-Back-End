const express = require('express')
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) =>{
    queries.getAllMovies().then(movie => res.send(movie))
})

app.get('/:id', (req, res) =>{
    queries.getMovieById(req.params.id).then(students => res.send(movie))
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})


