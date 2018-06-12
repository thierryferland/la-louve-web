
var dbServer
var dbName

if (process.env.NODE_ENV === 'production') {
  dbServer = 'http://167.99.253.28:8069'
  dbName = 'la-louve'
} else if (process.env.NODE_ENV === 'uat') {
  dbServer = 'http://167.99.253.28:8069'
  dbName = 'la-louve'
} else {
  dbServer = 'http://167.99.253.28:8069'
  dbName = 'la-louve'
}

module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'UMMMM',
  API_VERSION: 'v1',
  PORT: 3001,
  DB_SERVER: dbServer,
  DB_NAME: dbName,
  DB_USERNAME: 'thierry.ferland@gmail.com',
  DB_PASSWORD: 'lalouve'
}
