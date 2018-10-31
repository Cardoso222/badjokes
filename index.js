const jokes = require('./jokes.json');

var response = jokes[Math.floor(Math.random()*jokes.length)];
console.log(response);
