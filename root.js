const axios = require('axios')

const SWAPI = 'https://swapi.co/api'

module.exports = {
  person: () => {
    return axios.get(`${SWAPI}/people/3`)
      .then(res => res.data)
  },
  film: () => {
    return axios.get(`${SWAPI}/films/4`)
      .then(res => res.data)
  },
  planet: () => {
    return axios.get(`${SWAPI}/planets/9`)
      .then(res => res.data)
  },
}
