var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: process.env.API_URL
  // baseURL: 'https://ttl-api.herokuapp.com/api/'
});

module.exports = axiosInstance;
