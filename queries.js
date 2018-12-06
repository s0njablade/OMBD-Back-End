const db = require('./database-connection')

module.exports = {
    getAllMovies(){
        return db('movies')
    },
    getMovieById(id){
        return db('movies').where('id', id).first()
    },
    createMovie(newMovie){
        return db('movies').insert(newMovie).returning('*')
    },
    updateMovie(id, updatedMovie){
        return db('movies').where('id', id).update(updatedMovie).returning('*')
    }

}