exports.seed = function (knex, Promise) {

  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([{
          title: 'Selena',
          poster_URL: 'https://i.pinimg.com/originals/ce/22/09/ce22098648e2730446c9bb4e6e2283ae.jpg',
          director: 'Gregory Nava',
          year: 1997,
          my_rating: 100,
        },
        {
          title: 'Steel Magnolias',
          poster_URL: 'https://www.movieposter.com/posters/archive/main/78/MPW-39004',
          director: 'Herbert Ross',
          year: 1989,
          my_rating: 99,
        },
        {
          title: 'A League of Their Own',
          poster_URL: 'https://images-na.ssl-images-amazon.com/images/I/51x%2BvjamsHL.jpg',
          director: 'Penny Marshall',
          year: 1992,
          my_rating: 100,
        },
        {
          title: 'Harry Potter and the Half-Blood Prince',
          poster_URL: 'https://resizing.flixster.com/DMJ4MlXp9bGB8xHlrIZiffwhTVI=/206x305/v1.bTsxMTIyMDAwNTtqOzE3OTQ5OzEyMDA7MTA1MDsxNDAw',
          director: 'David Yates',
          year: 2009,
          my_rating: 95,
        },
        {
          title: 'Pulp Fiction',
          poster_URL: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
          director: 'Quentin Tarantino',
          year: 1994,
          my_rating: 100,
        },
        {
          title: 'West Side Story',
          poster_URL: 'https://fesapusewebsite.blob.core.windows.net/fathom/westsidestory-poster-ddc7e41ceb155ce3e33f3f32c6d14926.jpg',
          director: 'Jerome Robbins, Robert Wise',
          year: 1961,
          my_rating: 90,
        }
      ]);
    });
};