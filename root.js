const axios = require('axios')

module.exports = {
  person: () => {
    return axios.get('https://swapi.co/api/people/3')
      .then(res => res.data)
  },
  film: () => {
    return axios.get('https://swapi.co/api/films/4')
      .then(res => res.data)
  },
}
