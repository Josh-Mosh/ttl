var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/'
  // baseURL: 'https://ttl-api.herokuapp.com/api/'
});

module.exports = axiosInstance;
