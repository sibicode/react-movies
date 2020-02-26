const dotenv = require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  baseApiUrl: process.env.API_BASE_URL,
  apiKey: process.env.API_KEY
}
