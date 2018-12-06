const evironment = process.env.NODE_ENV || 'devleopment'
const config = require('./knexfile')
const configEnv = config[environment]
const knex = require('knex')
const connection = knex (configEnv)