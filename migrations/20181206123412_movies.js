
exports.up = (knex, Promise) => {
    return knex.schema.createTable('movies', (movie) => {
        movie.increments('id'),
        movie.string('title'),
        movie.string('director'),
        movie.integer('year')
        movie.integer('my_rating'),
        movie.string('poster_URL')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies')
};
