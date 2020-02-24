const dotenv = require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  baseApiUrl: process.env.BASE_API_URL,
  apiKey: process.env.API_KEY
};
