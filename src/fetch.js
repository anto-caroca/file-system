const fetch = require('node-fetch');

fetch('https://www.google.com/').then((response) => {
  console.log(response)
})